```javascript
// pages/api/route.js
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}
```
This API route works fine in Next.js 14, but in Next.js 15, it returns a 500 error.  The error message is not very helpful.