#### 起步
配置 ```package.json``` 文件，新增 ```private``` 属性，确保安装包是私有的
```
{
  "name": "webpack_demo",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "css-loader": "^3.2.0",
    "file-loader": "^4.2.0",
    "style-loader": "^1.0.0",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9"
  },
  "dependencies": {
    "lodash": "^4.17.15"
  }
}
```

### 清理 /dist 文件夹
```
// 抛错原写法
const CleanWebpackPlugin = require("clean-webpack-plugin");
 
...
 
plugins: [
    new CleanWebpackPlugin(['dist'])
]
 
...
 
// 另一种错误写法
 
const CleanWebpackPlugin = require("clean-webpack-plugin");
 
...
 
plugins: [
    new CleanWebpackPlugin(['dist'], {
        root: path.resolve(__dirname, '../'),   //根目录
    })
]
 
...
 
// =============================分割线==============================
 
// 正确写法
 
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
 
...
 
plugins: [
    new CleanWebpackPlugin()
]
 
...
```