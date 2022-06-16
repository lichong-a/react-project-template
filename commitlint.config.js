/**
 * build: 构建工具、依赖相关配置变更 <br />
 * ci: 持续集成配置、脚本修改 <br />
 * docs: 文档变更 <br />
 * feat: 新功能 <br />
 * fix: 缺陷修复 <br />
 * perf: 提高性能 <br />
 * refactor: 优化、重构 <br />
 * revert：还原 <br />
 * style: 代码格式（空格、格式化 等） <br />
 * test: 添加、修改测试代码 <br />
 * chore: 杂项，不修改源代码的其他修改
 *
 * @type {{extents: string[], rules: object}}
 */
module.exports = {
  extents: ['@commitlint/config-conventional'],
  rules: {
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      ['build', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test', 'chore'],
    ],
  },
};
