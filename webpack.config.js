const dev=require("./webpack.config.dev")
const prod=require("./webpack.config.prod")

if(process.env.NODE_ENV==="development"){
  module.exports=dev
}
if(process.env.NODE_ENV==="production"){
  module.exports=prod
}