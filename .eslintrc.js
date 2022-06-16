module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: '2021',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  settings: {
    react: {
      version: '17.0.2',
    },
  },
  // 声明全局变量
  globals: {
    baidu: true,
    UE: true,
    command: true,
    $: true,
  },
  parser: '@babel/eslint-parser',
  rules: {
    eqeqeq: 2, // 必须使用 === 和 !==
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-empty-function': 2, // 禁止空函数
    'no-multi-spaces': 2, // 禁止使用多个空格
    'no-trailing-spaces': 2, // 禁止禁用行尾空格
    'space-infix-ops': 2, // 要求操作符周围有空格
    'space-in-parens': 2, // 强制在圆括号内使用一致的空格
    'no-var': 2, // 要求使用 let 或 const 而不是 var,
    'no-unused-vars': 2, // 禁止出现未使用过的变量
    'react/prop-types': 0, // 防止在react组件定义中缺少props验证（禁用）
    'react/no-array-index-key': 0, // 防止在数组中使用index作为key（禁用）
    'react/no-danger': 0, // 防止使用危险的 JSX 属性 (react/no-danger)
    'jsx-a11y/click-events-have-key-events': 0, // 点击事件必须绑定一个键盘事件以帮助残疾人士（禁用）
    'jsx-a11y/interactive-supports-focus': 0, // 必须设置tabIndex允许元素获取焦点从而使用键盘tab就可以触发点击帮助残疾人士（禁用）
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
        packageDir: './',
      },
    ],
  },
};
