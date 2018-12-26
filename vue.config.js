module.exports = {
    // 基本路径
    baseUrl: './',
    // 输出文件目录
    outputDir: 'dist',
    // webpack-dev-server 相关配置
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        },
        port: 8080,
        lintOnSave: process.env.NODE_ENV !== 'production'
    }
}