# 부동산계산하기

쉽고 빠른 부동산 계산 서비스

## 🚀 빠른 시작

### 필요 조건
- Node.js 14.0.0 이상
- npm 또는 yarn

### 설치 방법

1. **의존성 설치**
```bash
npm install
```

2. **개발 서버 실행**
```bash
npm run dev
```

3. **프로덕션 서버 실행**
```bash
npm start
```

4. **브라우저에서 확인**
```
http://localhost:3000
```

## 📁 프로젝트 구조

```
real-estate-calculator/
├── server.js              # Express 서버 메인 파일
├── package.json           # 프로젝트 설정 및 의존성
├── public/                # 정적 파일
│   ├── css/
│   │   └── main.css      # 메인 스타일시트
│   └── js/
│       └── main.js       # 클라이언트 JavaScript
├── views/                 # EJS 템플릿
│   ├── home.ejs          # 홈 페이지
│   ├── 404.ejs           # 404 에러 페이지
│   └── error.ejs         # 에러 페이지
└── README.md             # 프로젝트 문서
```

## 🛠 기술 스택

- **Backend**: Node.js + Express.js
- **Template Engine**: EJS
- **Security**: Helmet.js
- **Compression**: Compression middleware
- **Development**: Nodemon (자동 재시작)

## 📝 주요 기능

### 현재 구현됨
- ✅ 반응형 홈 페이지
- ✅ 4가지 상황별 입구 (사기/보유/팔기/임대)
- ✅ 자주 찾는 계산 TOP 5
- ✅ 모바일 최적화 UI/UX
- ✅ 보안 헤더 (Helmet)
- ✅ Gzip 압축

### 구현 예정
- ⏳ 각 상황별 2단계 메뉴
- ⏳ 실제 계산기 페이지들
- ⏳ 계산 API 엔드포인트
- ⏳ 결과 저장 기능
- ⏳ 최근 계산 기록

## 🔧 환경 변수

`.env` 파일을 생성하여 설정:

```env
PORT=3000
NODE_ENV=development
```

## 📡 API 엔드포인트

### 페이지 라우트
- `GET /` - 홈 페이지
- `GET /buy` - 집을 사려고 해요
- `GET /hold` - 집을 가지고 있어요
- `GET /sell` - 집을 팔려고 해요
- `GET /rent` - 집을 빌려주려고 해요

### API 라우트 (예시)
- `POST /api/calculate/acquisition-tax` - 취득세 계산
  ```json
  {
    "price": 500000000,
    "housingType": "apartment",
    "isFirst": true
  }
  ```

## 🎨 디자인 특징

- **색상 시스템**
  - Primary: #0066FF (블루)
  - Secondary: #00D9B5 (민트)
  - 상황별 차별화된 그라데이션

- **타이포그래피**
  - 영문: Archivo (로고)
  - 한글: Noto Sans KR

- **인터랙션**
  - 카드 호버 효과
  - 터치 피드백
  - 순차적 애니메이션

## 🔐 보안

- Helmet.js를 통한 보안 헤더 설정
- CSP (Content Security Policy) 적용
- XSS 방지
- CSRF 보호 (구현 예정)

## 📱 반응형 디자인

- 모바일 퍼스트 접근
- 브레이크포인트:
  - Mobile: < 768px
  - Tablet: 768px ~ 1024px
  - Desktop: > 1024px

## 🚀 배포

### Vercel
```bash
vercel
```

### Docker
```bash
docker build -t real-estate-calculator .
docker run -p 3000:3000 real-estate-calculator
```

### PM2 (프로덕션)
```bash
npm install -g pm2
pm2 start server.js --name real-estate-calculator
pm2 save
```

## 📄 라이선스

ISC

## 👥 기여

이슈와 풀 리퀘스트를 환영합니다!

## 📞 문의

문의사항이 있으시면 이슈를 생성해주세요.
