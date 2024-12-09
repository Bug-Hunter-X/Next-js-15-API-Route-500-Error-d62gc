# Next.js 15 API Route 500 Error

This repository demonstrates a bug encountered when upgrading a Next.js application from version 14 to 15.  A simple API route that functioned correctly in Next.js 14 now returns a 500 Internal Server Error in Next.js 15.

The error message provided by Next.js 15 is unhelpful in diagnosing the root cause. This repository provides the problematic code and a potential solution.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Access the API route: `http://localhost:3000/api/route`

You should observe a 500 Internal Server Error.

## Potential Solution

See `apiRouteSolution.js` for a possible fix.  While the original code is incredibly simple, this points to potential underlying issues with middleware or other configurations in your Next.js 15 project that may need further investigation.