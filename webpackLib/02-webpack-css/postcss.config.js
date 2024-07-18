/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require("postcss-preset-env"), // 加兼容前缀,转换兼容样式 color:#00000050 => color:rgba(0,0,0,0.5)
    // require("autoprefixer"), // 加兼容前缀
    require("postcss-nested"), // 像sass一样的写css
    require("cssnano")({
      preset: "default", // 去除多余的兼容样式,压缩样式文件
    }),
  ],
};

module.exports = config;
