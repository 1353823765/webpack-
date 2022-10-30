const path = require("path");
 const {merge}=require("webpack-merge")
const base=require("./webpack.config.base")
module.exports = merge(base, {

  module: {
    rules: [
      
      {
        test: /\.css$/,
        //添加css模块化loader配置项
        use: [ {loader:"style-loader"},
          { loader:"css-loader" ,
          options: {
            //开启css模块化
            modules: true,
            },
            }],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", 
            // translates CSS into CommonJS
            options: {
              modules: true,
              },
              
          },
          {
            loader: "less-loader", // compiles Less to CSS
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "sass-loader", // compiles sass to CSS
          },
        ],
      },
     

  
        
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true, //会 gzip(压缩) 和 serve(服务) 所有来自项目根路径下 dist/ 目录的文件
    port: 9000,
    overlay: {
      warnings: true,
      errors: true
      },
      
    proxy: {
      "/data": {
        //地址
        target:
          "https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E7%A7%A6%E7%9A%87%E5%B2%9B&ci=122&channelId=4", //接口地址,跨域访问
        // secure: false,// 如果是https接口，需要配置这个参数
        changeOrigin: true, //开启跨域
        pathRewrite: { "^/data": "" }, //如果接口本身没有/data需要通过pathRewrite来重写了地址
      },
    },
  },

  
  mode: "development",
  //调试
  devtool: "source-map",
});
