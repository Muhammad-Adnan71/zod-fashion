/* eslint-disable @typescript-eslint/no-unused-vars */
import { z } from "zod";
import { PhoneNumberUtil } from "google-libphonenumber";


const phoneUtil = PhoneNumberUtil.getInstance();

export const ContactUsSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(1, "Name is required"),
  email: z
    .string({
      required_error: "Email is required",
    })
    .min(1, "Email is required")
    .email("Email is invalid"),
  phone: z
    .string({
      required_error: "Phone Number is required",
    })
    .refine((value) => {
      try {
        const number = phoneUtil.parse(value, "GB"); // Assuming "GB" (UK) as the default region
        return phoneUtil.isValidNumber(number);
      } catch (error) {
        return false;
      }
    }, {
      message: "Phone Number is invalid",
    }),
    category: z
    .array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    )
    .optional(),
});

export type ContactInput = z.infer<typeof ContactUsSchema>;


export const FashionContactUsSchema = z.object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .min(1, "Name is required"),
    email: z
      .string({
        required_error: "Email is required",
      })
      .min(1, "Email is required")
      .email("Email is invalid"),
    phone: z
      .string({
        required_error: "Phone Number is required",
      })
      .refine((value) => {
        try {
          const number = phoneUtil.parse(value, "GB"); // Assuming "GB" (UK) as the default region
          return phoneUtil.isValidNumber(number);
        } catch (error) {
          return false;
        }
      }, {
        message: "Phone Number is invalid",
      }),
      category: z
      .array(
        z.object({
          value: z.string(),
          label: z.string(),
        })
      )
      .min(1, "At least one category must be selected"),
  });
  
  export type FashionContactInput = z.infer<typeof FashionContactUsSchema>;