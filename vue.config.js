module.exports = {
  productionSourceMap: false,
  filenameHashing: false,
  chainWebpack: (config) => {
    config.plugins.delete('prefetch-posts');
  },
  // devServer proxy 설정 필요
}