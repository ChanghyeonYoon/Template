# Next.js Template

이 프로젝트는 yarn berry를 사용하고 있습니다.
```
// yarn이 설치 되지 않았을 경우 yarn 설치
npm install -g yarn

// yarn berry 설정 (해당 레포만 적용됩니다)
yarn set version berry

// 패키지 설치
yarn install

// 의존성 검사
yarn dlx @yarnpkg/doctor

// yarn berry는 node_modules를 사용하지 않아 에디터가 모듈을 찾지 못할 수 있습니다.
// 아래의 명령어를 입력하여 에디터에서 모듈을 찾을 수 있도록 설정합니다.
yarn dlx @yarnpkg/sdks vscode

// 개발 서버 실행
yarn dev
```

- Next.js
- TypeScript
- Tailwind CSS
- ESLint
- Prettier
- Husky
- Lint Staged
- Jest
- React Testing Library
- React-Query
