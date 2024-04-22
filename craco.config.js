const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@assets': path.resolve(__dirname, './src/assets'),
            '@dash-ui': path.resolve(__dirname, './src/components'),
            '@provider': path.resolve(__dirname, './src/provider'),
            '@localization': path.resolve(__dirname, './src/localization'),
            '@router': path.resolve(__dirname, './src/router'),
            '@router/*': path.resolve(__dirname, './src/router/*'),
            '@screens': path.resolve(__dirname, './src/screens'),
            '@screens/*': path.resolve(__dirname, './src/screens/*'),
            '@service': path.resolve(__dirname, './src/service'),
            '@service/*': path.resolve(__dirname, './src/service/*'),
            '@store': path.resolve(__dirname, './src/store'),
            '@store/*': path.resolve(__dirname, './src/store/*'),
            '@zustand_store': path.resolve(__dirname, './src/zustand_store'),
            '@zustand_store/*': path.resolve(
                __dirname,
                './src/zustand_store/*'
            ),
            '@selectors': path.resolve(
                __dirname,
                './src/zustand_store/selectors'
            ),
        },
    },
};
