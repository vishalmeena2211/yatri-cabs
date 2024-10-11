/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"www.yatricabs.com"
            }
        ]
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
