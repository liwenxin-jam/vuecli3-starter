// Vue CLI3配置参考 https://cli.vuejs.org/zh/config/#vue-config-js
const path = require("path");
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@views", resolve("src/views"))
      .set("@utils", resolve("src/utils"));

    // svg loader
    // const svgRule = config.module.rule('svg') // 找到svg-loader
    // svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
    // svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
    // svgRule // 添加svg新的loader处理
    //   .test(/\.svg$/)
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]'
    //   });
    // 删除预加载
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
  },
  devServer: {
    port: 8082,
    open: true, // 自动开启浏览器
    compress: true, // 开启压缩
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/mock': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/mock': ''
        }
      }
    }
  }
}
