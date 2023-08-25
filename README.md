# react webpack ssr (2.0.0)

## 목적

- nextjs 12처럼 페이지 소스에 필요한 데이터를 미리 채워서 보여주는 서버 사이드 렌더링을 구현합니다.

- react와 webpack만 사용해서 파일 시스템, DB 등 인터널 서비스에 접근할 수 있습니다

## 사용 방법

### Developmenet

```bash
# Transpile to development mode
npm run build:dev

# Run development server
npm run dev
```

### Production

```bash
# Transpile to production mode
npm run build:prod

# Run production server

## with node
npm run start

## with pm2
npm run start:pm2

## Delete process (pm2)
npm run del
```

### 이슈

### HMR 적용 (2023.08.25)

JavaScript, CSS(tailwind)의 HMR가 적용되었습니다.

### RSC 미적용

- React Server Component가 동작은 하지만 fetch 전략이 수립되어 있지 않습니다.

- 서버 컴포넌트로 동작이 되어야하는 컴포넌트까지 클라이언트에서 hydration되는 문제가 있습니다.

### Webpack 파편화 해결 (2023.08.25)

디버깅을 위해 나눠 둔 webpack 설정 파일을 두 개로 줄였습니다.

HMR가 적용되면서 webpack watch 모드를 사용하지 않아도 되도록 변경되었습니다.
