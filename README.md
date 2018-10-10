# babel_study
使用babel
1、安装babel：
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react @babel/node
npm install --save @babel/polyfill
2、创建配置文件babel.config.js
3、安装nodemon，用来自动重启服务
npm install --save-dev nodemon
4、设置package.json
测试使用：
"start": "nodemon src/index.js --exec babel-node",
生产环境使用：
"build": "npx babel src --out-dir lib",
"serve": "node lib/index.js"
5、安装jest
npm install --save-dev jest
yarn add --dev babel-jest babel-core@^7.0.0-bridge.0 @babel/core regenerator-runtime
6、配置package.json
"test": "jest",
