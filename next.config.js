// noinspection JSUnusedGlobalSymbols
module.exports = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    env: {
        basePath: process.env.BASE_PATH || "",
    },
    basePath: process.env.BASE_PATH || "",
    i18n: {
        locales: ["en", "ru", "ar"],
        defaultLocale: "en",
    },
};
