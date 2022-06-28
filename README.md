# react-project-template

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://github.com/facebook/react/)
&emsp;[![Webpack](https://img.shields.io/badge/Webpack-5.73.0-lightgrey?logo=webpack)](https://webpack.js.org/)
&emsp;[![Babel](https://img.shields.io/badge/Babel-7.18.5-yellow?logo=babel)](https://babeljs.io/)
&emsp;[![NodeJS](https://img.shields.io/badge/NodeJS-16.15.1-rightgreen?logo=node.js)](https://nodejs.org/)
&emsp;[![Sass](https://img.shields.io/badge/Sass-1.53.0-ff69b4?logo=node.js)](https://sass-lang.com/)
&emsp;[![ESLint](https://img.shields.io/badge/ESLint-8.18.0-blueviolet?logo=eslint)](https://eslint.bootcss.com/)
&emsp;[![Prettier](https://img.shields.io/badge/Prettier-2.7.1-black?logo=prettier)](https://prettier.io/)
&emsp;[![husky](https://img.shields.io/badge/husky-8.0.1-green?logo=husky)](https://github.com/typicode/husky/)
&emsp;[![Git](https://img.shields.io/badge/Git-2.35.1-red?logo=git)](https://git-scm.com/)

## 项目简介

### 注意事项

#### 开发规范

1. 本项目使用基于[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)的 ESLint 规范做了个性化配置，请遵循。
2. 请勿擅自修改 ESLint 和 Prettier 规范，确需修改请咨询技术负责人。
3. 开发工具或编辑工具配置 Prettier 请查看[指南](https://www.prettier.cn/docs/editors.html)
4. <details><summary>提交规范</summary>
    <p>基本格式：</p>
    <div style="background-color: rgba(0,100,125,0.22);">
       &lt;type&gt;[optional scope]: &lt;description&gt;<br/>
       [optional body]<br/>
       [optional footer(s)]<br/>
       -------------------- 翻译 --------------------<br/>
       &lt;类型&gt;[可选 范围]: &lt;描述&gt;<br/>
       [可选 正文]<br/>
       [可选 脚注]<br/>
    </div>
    <table>
        <thead>
            <tr>
                <th>格式</th>
                <th>说明</th>
                <th>备注</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>type 类型</td>
                <td>可选类型如下 <br />
                    build: 构建工具、依赖相关配置变更 <br />
                    ci: 持续集成配置、脚本修改 <br />
                    docs: 文档变更 <br />
                    feat: 新功能 <br />
                    fix: 缺陷修复 <br />
                    perf: 提高性能 <br />
                    refactor: 优化、重构 <br />
                    revert：还原 <br />
                    style: 代码格式（空格、格式化 等） <br />
                    test: 添加、修改测试代码 <br />
                    chore: 杂项，不修改源代码的其他修改
                </td>
                <td></td>
            </tr>
            <tr>
                <td>scope 范围</td>
                <td>修改范围</td>
                <td>分层、业务等范围</td>
            </tr>
            <tr>
                <td>description 描述</td>
                <td>简短描述，概括本次提交内容</td>
                <td>控制在 50 个字符以内的祈使句</td>
            </tr>
            <tr>
                <td>body 正文</td>
                <td>详细描述</td>
                <td>建议 72 个字符换行，描述"是什么"和"为什么"，不描述"如何做"</td>
            </tr>
            <tr>
                <td>footer(s) 脚注</td>
                <td>关联 issue，禅道需求（S）、缺陷（B）</td>
                <td></td>
            </tr>
        </tbody>
    </table>
   </details>

### 简介

- 名词解释
- 功能简介
- 业务场景

### 项目管理

- 开发人员：[Members](https://github.com/lichong-a/react-project-template/graphs/contributors)
- 更新日志：[CHANGELOG.md](https://github.com/lichong-a/react-project-template/blob/main/CHANGELOG.md)
- 常见问题：[FAQ](https://github.com/lichong-a/react-project-template/wiki/FAQ)
- LICENSE：[LICENSE](https://github.com/lichong-a/react-project-template/blob/main/LICENSE)

### 相关文档

- 需求文档：
- 接口文档：
- 程序设计：
- 业务知识：

## 构建、部署

### <mark>本地环境搭建</mark>

- **开发工具**
  - WebStorm：[https://www.jetbrains.com/webstorm/](https://www.jetbrains.com/webstorm/)
  - VS Code：[https://code.visualstudio.com/](https://code.visualstudio.com/)
- **涉及配置文件**
  - build/webpack.common.config.js：webpack 公共配置文件
  - build/webpack.dev.config.js：webpack 开发环境配置文件
  - build/webpack.prod.config.js：webpack 打包配置文件
  - package.json：项目配置文件
  - Dockerfile：Docker 镜像配置文件
  - commitlint.config.js：commitlint 配置文件
  - .gitlab-ci.yml：GitLab CI 配置文件
  - .eslintrc.js：ESLint 配置文件
  - .eslintignore：ESLint 忽略文件
  - .babelrc.js：Babel 配置文件
  - .gitignore：Git 忽略文件
  - .prettierrc.json：Prettier 配置文件
  - .prettierignore：Prettier 忽略文件
- **启动**
  ```
  npm install
  npm run dev
  ```
- **访问项目**
  - 默认为[http://localhost:8080/](http://localhost:8080/)

### <mark>生产环境打包部署</mark>

#### 方式一：（推荐）

```
npm run build
```

打包后使用 nginx 代理

#### 方式二：（不推荐）

```
npm run start
```

## <mark>团队协作</mark>

- 详见 [CONTRIBUTING.md](https://github.com/lichong-a/react-project-template/blob/main/CONTRIBUTING.md)

## 重要决策

- 大事件：[GitLab / wiki / 大事件](https://github.com/lichong-a/react-project-template/wiki/Home)
  - 重要决策：
  - 大事件：
