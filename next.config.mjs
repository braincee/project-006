/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
    experimental: {
        serverActions: true,
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.externals.push({
            'utf-8-validate': 'commonjs utf-8-validate',
            'bufferutil': 'commonjs bufferutil',
        })
        config.ignoreWarnings = [
            // https://webpack.js.org/configuration/other-options/#ignorewarnings
            {
                module: /node-fetch/,
                message: /.*Can't resolve 'encoding'.*/,
            },
        ]
        return config
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets-global.website-files.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'assets.stickpng.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'freepngimg.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                port: '',
                pathname: '**',
            },
        ],
    },

    /**
     * If you are using `appDir` then you must comment the below `i18n` config out.
     *
     * @see https://github.com/vercel/next.js/issues/41980
     */
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
}

export default config
