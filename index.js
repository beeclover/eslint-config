module.exports = {
  env: {
    es2021: true,
    browser: true,
    amd: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // 클래스 메서드 안에서 반드시 this를 사용할 필요 없음
    'class-methods-use-this': 'off',

    // 행의 최대 길이는 120
    'max-len': ['warn', 120],

    // 문장의 마지막에 존재하는 주석 시작 전에 한 개 이상의 공백을 허용
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
  },
};
