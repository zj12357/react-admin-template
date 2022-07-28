## 📦 使用

$ yarn

$ yarn start

## 🔨 构建

$ yarn build:prod(生产)

$ yarn build:test(测试)

## 🖥 配置

查看 craco

## 环境要求

node 版本 v16.0 以内
统一使用 yarn 安装项目
yarn 源地址：https://registry.yarnpkg.com

-   💎 **Hooks**: 使用最新的 react hooks API 代替传统的 class API
-   💡 **TypeScript**: 应用程序级 JavaScript 的语言
-   📜 **区块**: 通过区块模板快速构建页面
-   🚀 **最新技术栈**: 使用 rtypescript + react + @reduxjs/toolkit + react-router-dom + react-redux + antd 等前端前沿技术开发
-   ⚙️ **最佳实践**: 良好的工程实践助您持续产出高质量代码
-   🔢 **Mock 数据**: 实用的本地数据调试方案
-   🌐 **国际化**: 内建业界通用的国际化方案
-   ✅ **使用**: 完整的文档和详细的注释，无阻碍使用

## 命名规范，书写规范

-   文件目录：按照业务功能划分
-   组件：文件名+index.tsx，使用 hooks 方式编写组件
-   scss 文件命名格式：\*.scoped.scss
-   API：编写 api 响应和参数的类型，使用 useHttp 请求数据
-   数据管理：绝大多数页面的数据流转都是在当前页完成，在页面挂载的时候请求后端接口获取并消费,一些公共的数据存放在 sotre

## 文件夹结构

-   /api:接口管理
-   /assets:静态文件，图片，css，字体
-   /common:处理公共业务，路由管理
-   /components:公共组件
-   /config:系统设置
-   /hooks:公共 hooks
-   /layouts:系统白名单和用户界面布局
-   /locales:国际化翻译
-   /router:路由管理
-   /store:数据管理
-   /types:请求响应和参数的定义
-   /utils:通用方法
