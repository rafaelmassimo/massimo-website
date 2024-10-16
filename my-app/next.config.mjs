import withPlaiceholder from '@plaiceholder/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            bodySizeLimit: '50mb',
        },
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
};

export default withPlaiceholder(nextConfig);
