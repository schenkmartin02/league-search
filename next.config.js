// next.config.js
module.exports = {
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: 'https://europe.api.riotgames.com/:path*', // Europe API URL
            },
        ]
    },
}
