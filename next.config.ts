import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	env: {
		NEXT_API_URL: process.env.NEXT_API_URL,
		NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
		NEXTAUTH_URL: process.env.NEXTAUTH_URL,
		WEBSITE_NAME: process.env.WEBSITE_NAME,
	},
	images: {
		domains: ["simpletree.s3.amazonaws.com"],
	},
};

module.exports = nextConfig;
