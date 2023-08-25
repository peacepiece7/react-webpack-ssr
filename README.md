# react webpack ssr (1.0.0)

## 목적

- nextjs 12처럼 페이지 소스에 필요한 데이터를 미리 채워서 보여주는 서버 사이드 렌더링을 구현합니다.

- react와 webpack만 사용해서 파일 시스템, DB 등 인터널 서비스에 접근할 수 있습니다

## 사용 방법

### Developmenet

```bash
# 개발 서버 번들링 및 감시
npm run watch:server

# react apllication 번들링 및 감시
npm run watch:client

# 개발 서버 실행
npm run dev
```

### Production

```bash
# 번들링
npm run build

# 서버 실행
npm run start

# 서버 프로세스 종료
npm run del
```

### 이슈

### HMR 미적용

Webpack Hot Module Replacement를 구현하지 않았습니다.

### RSC 미적용

- React Server Component가 동작은 하지만 fetch 전략이 수립되어 있지 않습니다.

- 서버 컴포넌트로 동작이 되어야하는 컴포넌트까지 클라이언트에서 hydration되는 문제가 있습니다.

### Webpack 파편화

에러 핸들링을 위해 최대한 webpack을 쪼개놨습니다.

개발 시 프로세스를 최소 3개나 띄워야하는 불편함이 있습니다.
