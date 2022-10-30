const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackBar = require('webpackbar');

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: {
    one: "./src/one.js",
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name]_[hash].main.js",
  },
  module: {
    rules: [
      {
       test: /\.jsx?$/,
        
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
         
         
            
        },
      },
      
     
  
     

      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              //小于8K转码为base64编码 由于1.gif小于8k直接转码为base64编码
              limit: 8192,
              // publicPath: "./../img",
              outputPath: "img/",
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
        name: '[name].[ext]',
        publicPath: './../fonts',
        outputPath: 'fonts/' 
        },
        },
        
    ],
  },
  plugins: [
    //配置多个应用
    new HtmlWebpackPlugin({
      //假设是前台应用入口
      title: "首页",
      filename: "index.html",
      template: "./public/index.html",
      chunks: ["index"], //chunks指定需要引入的入口模块的键名 index:"./src/index.js"
    }),
    new HtmlWebpackPlugin({
      //假设是后台应用入口one:"./src/one.js"
      title: "One",
      filename: "one.html",
      template: "./public/one.html",
      chunks: ["one"], //chunks指定需要引入的入口模块的键名 one:"./src/one.js"
    }),

    new CleanWebpackPlugin(),
    new WebpackBar()

  ],
  
  //添加配置项，不用添扩展名
  resolve:{
    extensions:['.jsx','.less','.js','.css']
  },

 
};
