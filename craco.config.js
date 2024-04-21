const path = require('path');

module.exports = {
    webpack: {
        alias: {
            src: path.resolve(__dirname, './src'),
            assets: path.resolve(__dirname, './src/assets'),
            'assets/*': path.resolve(__dirname, './src/assets/*'),
            components: path.resolve(__dirname, './src/components'),
            'components/*': path.resolve(__dirname, './src/components/*'),
            provider: path.resolve(__dirname, './src/provider'),
            'provider/*': path.resolve(__dirname, './src/provider/*'),
            router: path.resolve(__dirname, './src/router'),
            'router/*': path.resolve(__dirname, './src/router/*'),
            screens: path.resolve(__dirname, './src/screens'),
            'screens/*': path.resolve(__dirname, './src/screens/*'),
            service: path.resolve(__dirname, './src/service'),
            'service/*': path.resolve(__dirname, './src/service/*'),
            store: path.resolve(__dirname, './src/store'),
            'store/*': path.resolve(__dirname, './src/store/*'),
            zustand_store: path.resolve(__dirname, './src/zustand_store'),
            'zustand_store/*': path.resolve(__dirname, './src/zustand_store/*'),
        },
    },
};
