
 const {merge}=require("webpack-merge")
 const base=require("./webpack.config.base")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(base,{

  module: {
    rules: [
     
      {
        test: /\.css$/,
        //添加css模块化loader配置项
        use: [ {loader:MiniCssExtractPlugin.loader},
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
            loader: MiniCssExtractPlugin.loader, // creates style nodes from JS strings
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
            loader: MiniCssExtractPlugin.loader, // creates style nodes from JS strings
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
  plugins: [
    //配置多个应用
 
  
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name]-[hash].css",
      chunkFilename: "[id].css",
    }),

  ],
 


  mode: "production",
 
}) ;
