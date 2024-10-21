/* eslint-disable @typescript-eslint/no-explicit-any */
import { verifyCaptchaAction } from "@utils/recaptcha";
import { getErrorResponse } from "../../../utils/api-helpers";
import { NextRequest, NextResponse } from "next/server";
import { sendEmailService } from "@utils/email-config";
import { contactTemplate } from "@utils/emailTemplate";
// import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    const { gReCaptchaToken, ...rest } =
        await request.json();
    const verify = await verifyCaptchaAction(gReCaptchaToken);

    if (!verify) {
        return new NextResponse(
            JSON.stringify({
                message: "recaptcha token is not verify",
                status: "error",
            }),
            {
                status: 401,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
    try {
        const response = await fetch(`http://13.215.74.68:8070/set/crm_leads/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...rest }),
        });
        const result = await response.json();
        if (rest.params.source_name == "fashion" || rest.params.source_name == "modest wear") {
            await sendEmailService(rest.params.email, contactTemplate(rest.params.name));
        }
        return new NextResponse(
            JSON.stringify({
                data: result,
                status: "success",
            }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );

    } catch (error: any) {
        return getErrorResponse(500, error.message);
    }
}
