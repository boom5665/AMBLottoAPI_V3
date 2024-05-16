// middleware/cors.js

export default function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  if (req.method === 'OPTIONS') {
    // ตอบกลับการร้องขอ Preflight ด้วยสถานะ 200
    res.status(200).end();
    return;
  }
  next();
}
