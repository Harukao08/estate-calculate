const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
}));

// Compression middleware
app.use(compression());

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '1d',
  etag: true
}));

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.render('home', {
    title: '부동산계산하기 - 쉽고 빠른 부동산 계산',
    description: '복잡한 세금과 비용, 3번의 터치로 해결하세요'
  });
});

// 상황별 페이지 라우트
app.get('/buy', (req, res) => {
  res.render('buy', {
    title: '집을 사려고 해요 - 부동산계산하기',
    description: '취득세, 대출 한도, 중개수수료 계산'
  });
});

app.get('/hold', (req, res) => {
  res.render('hold', {
    title: '집을 가지고 있어요 - 부동산계산하기',
    description: '재산세, 종합부동산세 계산'
  });
});

app.get('/sell', (req, res) => {
  res.render('sell', {
    title: '집을 팔려고 해요 - 부동산계산하기',
    description: '양도소득세, 순수익 계산'
  });
});

app.get('/rent', (req, res) => {
  res.render('rent', {
    title: '집을 빌려주려고 해요 - 부동산계산하기',
    description: '임대수익률, 임대소득세 계산'
  });
});

// 계산기 라우트
app.get('/calculator/acquisition-tax', (req, res) => {
  res.render('acquisition-tax', {
    title: '취득세 계산기 - 부동산계산하기'
  });
});

app.get('/calculator/dsr', (req, res) => {
  res.render('dsr', {
    title: '대출 가능 금액 (DSR) 계산기 - 부동산계산하기'
  });
});

// 계산기 API 엔드포인트 (예시)
app.post('/api/calculate/acquisition-tax', (req, res) => {
  // 취득세 계산 로직
  const { price, housingType, isFirst } = req.body;
  
  // 간단한 계산 예시 (실제로는 복잡한 로직 필요)
  let taxRate = 0.01; // 기본 1%
  
  if (price > 600000000) {
    taxRate = 0.03; // 6억 초과 3%
  }
  
  const acquisitionTax = price * taxRate;
  const localEducationTax = acquisitionTax * 0.1;
  const total = acquisitionTax + localEducationTax;
  
  res.json({
    success: true,
    data: {
      acquisitionTax,
      localEducationTax,
      total,
      breakdown: [
        { name: '취득세', amount: acquisitionTax },
        { name: '지방교육세', amount: localEducationTax }
      ]
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', {
    title: '페이지를 찾을 수 없습니다 - 부동산계산하기'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', {
    title: '오류가 발생했습니다 - 부동산계산하기',
    error: process.env.NODE_ENV === 'development' ? err : {}
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════╗
║                                       ║
║    🏠 부동산계산하기 서버 시작됨      ║
║                                       ║
║      URL: http://localhost:${PORT}      ║
║                                       ║
╚═══════════════════════════════════════╝
  `);
});

module.exports = app;
