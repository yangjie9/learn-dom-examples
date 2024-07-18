# 初始化

```
npm init -y
```

创建 src 文件夹，创建 index.js 文件；创建 index.html 文件;

```
npm install webpack webpack-dev-server  webpack-cli -D
```

根目录创建并配置 webpack.config.js 文件

### html (html-webpack-plugin)

```
npm i -D html-webpack-plugin
```

根目录创建并配置 postcss.config.js, .browserslistrc

### css

```
npm install -D
style-loader
css-loader
less-loader
postcss-loader
postcss-cli
autoprefixer
postcss-preset-env
mini-css-extract-plugin
```

查看浏览器的占有率: [caniuse.com](https://caniuse.com/usage-table)
浏览器兼容配置器: [autoprefixer](URL_ADDRESS) 给样式添加浏览器前缀；

> 方法一：
> 在 package.json 中添加

```json
"browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
```

> 方法二：
> 创建.browserslistrc

```
> 1%  // 占有率超过1%的浏览器
last 2 version // 最近两个版本
not dead // 最近一年未被淘汰的浏览器
```

# 运行
