module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  
  // assetsDir:'static',
  // parallel:false,
  // publicPath:'./',
  // devServer:{
  //     port:5000,//端口号
  //     open:true, //是否自启动
  
}



