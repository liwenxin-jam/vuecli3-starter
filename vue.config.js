// Vue CLI3配置参考 https://cli.vuejs.org/zh/config/#vue-config-js
const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production';
const cdn = {
  css: [
    'https://unpkg.com/element-ui/lib/theme-chalk/index.css',
    'https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.css'
  ],
  js: [
    'https://cdn.bootcss.com/vue/2.6.6/vue.runtime.min.js',
    'https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js',
    'https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js',
    'https://cdn.bootcss.com/axios/0.18.0/axios.min.js',
    'https://unpkg.com/element-ui/lib/index.js',
    'https://cdn.bootcss.com/js-cookie/2.2.0/js.cookie.min.js',
    'https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.js'
  ]
}

module.exports = {
  // 是否需要二级域名访问资源
  publicPath: "./",
  // 输出文件目录
  // outputDir: isProduction ? path.resolve(__dirname, '../public') : "dist",
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。区别public/static第三方文件
  assetsDir: "assets",
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  // indexPath: isProduction ? path.resolve(__dirname, '../public/index.html') : "./",
  lintOnSave: false,
  chainWebpack: config => {
    config
      .entry('main')
      .add('babel-polyfill')
      .end();
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@views', resolve('src/views'))
      .set('@scss', resolve('src/assets/styles'))
      .set('@img', resolve('src/assets/images'))
      .set('@utils', resolve('src/utils'));

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
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')

    if (isProduction) {
      // 压缩代码
      config.optimization.minimize(true);
      // 分割代码
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial'
          },
          elementUI: {
            name: 'chunk-elementUI',
            priority: 20,
            test: /[\\/]node_modules[\\/]element-ui[\\/]/,
            chunks: 'all'
          }
        }
      });
      // 生产环境注入cdn
      config.plugin('html')
        .tap(args => {
          args[0].cdn = cdn;
          return args;
        });
    }
  },
  // vscode 断点调试 https://cn.vuejs.org/v2/cookbook/debugging-in-vscode.html
  configureWebpack: config => {
    // config.entry = ["babel-polyfill", "./src/main.js"];

    if (isProduction) {
      // 用cdn方式引入
      config.externals = {
        'vue': 'Vue',
        'vuex': 'Vuex',
        'vue-router': 'VueRouter',
        'axios': 'axios',
        'element-ui': 'ELEMENT',
        'js-cookie': 'Cookies',
        'nprogress': 'NProgress'
      };
      // @vue/cli-service的配置源码也是使用了terser-webpack-plugin插件进行Tree Shaking
      // 生产环境自动删除console和debugger
      // config.optimization.minimizer[0].options.terserOptions.compress.warnings = false;
      // config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
      // config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true;
      // config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = ['console.log'];
      // uglifyjs-webpack-plugin 配置代码压缩
      config.plugins.push(
        // 生产环境自动删除console和debugger
        new UglifyJsPlugin({
          uglifyOptions: {
            warnings: false,
            compress: {
              // warnings: false,
              drop_debugger: true,
              drop_console: true,
            },
          },
          sourceMap: false,
          parallel: true,
        })
      );
    } else {
      // 生产模式下省略devtool，或者手动设成nosources-source-map无源代码内容
      // source-map 原始源代码(断点调试) eval-source-map cheap-eval-source-map cheap-module-eval-source-map
      config.devtool = 'eval-source-map'
    }
  },
  // 生产环境是否生成 sourceMap 文件，打包时不生成.map文件
  productionSourceMap: !isProduction,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // 引入全局变量样式
        data: `
          @import '@scss/variables.scss';
          @import '@scss/mixin.scss';
          $src: "${process.env.VUE_APP_PUBLIC_PATH}";
        `
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false,
  },
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  devServer: {
    port: 8099,
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
