// middleware/http-redirect.js

export default function (req, res, next) {
  // ตรวจสอบว่าโปรโตคอลเป็น HTTPS หรือไม่
  if (req.headers['x-forwarded-proto'] && req.headers['x-forwarded-proto'] === 'https') {
    // สร้าง URL ใหม่โดยเปลี่ยนโปรโตคอลเป็น HTTP
    const httpUrl = `http://${req.headers.host}${req.url}`;
    // ส่ง response ให้เปลี่ยนเส้นทางไปยัง URL ใหม่
    res.writeHead(301, { Location: httpUrl });
    res.end();
  } else {
    // ถ้าโปรโตคอลเป็น HTTP ให้ผ่าน middleware ไปยังขั้นตอนถัดไป
    next();
  }
}
