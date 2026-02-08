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
    description: '재산세, 종합부동산세, 임대소득세 계산'
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

app.get('/calculator/ltv', (req, res) => {
  res.render('ltv', {
    title: '주택담보대출 한도 (LTV) 계산기 - 부동산계산하기'
  });
});

app.get('/calculator/brokerage-fee', (req, res) => {
  res.render('brokerage-fee', {
    title: '중개수수료 계산기 - 부동산계산하기'
  });
});

app.get('/calculator/registration-fee', (req, res) => {
  res.render('registration-fee', {
    title: '등기비용 계산기 - 부동산계산하기'
  });
});

app.get('/calculator/total-cost', (req, res) => {
  res.render('total-cost', {
    title: '총 구매비용 계산기 - 부동산계산하기'
  });
});

app.get('/calculator/total-holding-tax', (req, res) => {
  res.render('total-holding-tax', {
    title: '보유세 통합 계산기 - 부동산계산하기'
  });
});

app.get('/calculator/property-tax', (req, res) => {
  res.render('property-tax', {
    title: '재산세 계산기 - 부동산계산하기'
  });
});

app.get('/calculator/comprehensive-tax', (req, res) => {
  res.render('comprehensive-tax', {
    title: '종합부동산세 계산기 - 부동산계산하기'
  });
});

app.get('/calculator/rental-income-tax', (req, res) => {
  res.render('rental-income-tax', {
    title: '임대소득세 계산기 - 부동산계산하기'
  });
});

app.get('/calculator/rental-yield', (req, res) => {
  res.render('rental-yield', {
    title: '임대수익률 계산기 - 부동산계산하기'
  });
});

app.get('/calculator/maintenance-cost', (req, res) => {
  res.render('maintenance-cost', {
    title: '관리비 및 유지비 계산기 - 부동산계산하기'
  });
});

app.get('/calculator/capital-gains-tax', (req, res) => {
  res.render('capital-gains-tax', {
    title: '양도소득세 계산기 - 부동산계산하기'
  });
});

app.get('/calculator/net-proceeds', (req, res) => {
  res.render('net-proceeds', {
    title: '실수령액 계산기 - 부동산계산하기'
  });
});

app.get('/calculator/break-even', (req, res) => {
  res.render('break-even', {
    title: '손익분기점 계산기 - 부동산계산하기'
  });
});

app.get('/calculator/1house-nontaxable', (req, res) => {
  res.render('1house-nontaxable', {
    title: '1세대 1주택 비과세 확인 - 부동산계산하기'
  });
});

app.get('/calculator/long-term-deduction', (req, res) => {
  res.render('long-term-deduction', {
    title: '장기보유특별공제 계산기 - 부동산계산하기'
  });
});

app.get('/calculator/jeonse-wolse-convert', (req, res) => {
  res.render('jeonse-wolse-convert', {
    title: '전월세 전환 계산기 - 부동산계산하기'
  });
});

app.get('/calculator/appropriate-rent', (req, res) => {
  res.render('appropriate-rent', {
    title: '적정 임대료 계산기 - 부동산계산하기'
  });
});

app.get('/calculator/deposit-management', (req, res) => {
  res.render('deposit-management', {
    title: '보증금 운용 계산기 - 부동산계산하기'
  });
});

app.get('/calculator/rental-registration', (req, res) => {
  res.render('rental-registration', {
    title: '임대사업자 혜택 분석 - 부동산계산하기'
  });
});

app.get('/rent', (req, res) => {
  res.render('rent', {
    title: '집을 빌려주려고 해요 - 부동산계산하기',
    description: '임대 관련 계산과 전월세 전환을 도와드립니다'
  });
});

// About pages
app.get('/about/latest-tax-law', (req, res) => {
  res.render('about/latest-tax-law', {
    title: '최신 세법 - 부동산계산하기'
  });
});

app.get('/about/fast-calculation', (req, res) => {
  res.render('about/fast-calculation', {
    title: '빠른 계산 - 부동산계산하기'
  });
});

app.get('/about/secure-service', (req, res) => {
  res.render('about/secure-service', {
    title: '안전한 서비스 - 부동산계산하기'
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
