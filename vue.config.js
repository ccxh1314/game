module.exports = {
    devServer: {
      proxy: {
        '/api': {          // == target + /api/xx
          target:'http://localhost:3000',
          // target: 'https://uncle9.top', 
          changeOrigin: true
        },
        '/douban': {
          target: 'https://douban.uieee.com',
          changeOrigin: true,
          pathRewrite:{     //路径替换
              '^/douban':'',   //  == target + "" + /url
          }
        }
      }
    }
  }

