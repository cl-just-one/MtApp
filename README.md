### 美团外卖APP

#### 第一次提交(2019年1月15日)
    搭建项目基础架构
    实现底部导航栏
#### 第二次提交(2019年1月16日)
``` javascript
px转rem函数

@function px2rem($px) {
    $rem: 37.5px;
    @return ($px / $rem) + rem;
}

安装sass-resources-loader, 配置dev。全局应用px2rem。

{ test: /\.scss$/ , use: ['style-loader', 'css-loader', 'sass-loader', {
    loader: 'sass-resources-loader',
    options: {
        resources: srcRoot + '/component/common.scss'
    }
}
```
```
eslint配置
安装eslint、eslint-loader、eslint-plugin-react
配置.eslintrc
```
#### 第三次提交(2019年1月18日)
```
配置项目热更新
安装react-hot-loader
配置
devserver: {
    hot: true
}
plugins: [
    new webpack.NamedModulesPlugin,
    new webpack.HotModuleReplacementPlugin
]
修改Main、store.js模块
```