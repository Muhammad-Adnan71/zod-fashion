/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/",
                destination: "/en",
            },
            {
                source: "/rugs-and-carpets",
                destination: "/en/rugs-and-carpets",
            },
            {
                source: "/modest-wear",
                destination: "/en/modest-wear",
            },
            {
                source: "/super-zod",
                destination: "/en/super-zod",
            },
            {
                source: "/privacy-policy",
                destination: "/en/privacy-policy",
            },
            {
                source: "/thank-you",
                destination: "/en/thank-you",
            },
            {
                source: "/leather-jackets",
                destination: "/en/leather-jackets",
            },
        ]
    }
};

export default nextConfig;
