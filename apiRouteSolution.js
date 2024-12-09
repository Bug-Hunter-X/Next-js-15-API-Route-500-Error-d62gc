```javascript
// pages/api/route.js
import { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ text: 'Hello' });
}
```
Adding explicit type annotations for `req` and `res` as `NextApiRequest` and `NextApiResponse` respectively might resolve the issue in some cases.  This ensures correct type handling within the API route function.