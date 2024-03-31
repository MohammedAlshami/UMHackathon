This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the required Python dependencies for the backend. Make sure you have Python and pip installed. Navigate to the `backend` directory and run:

```bash
pip install -r requirements.txt
```

In order to install dependencies for nextjs, go inside app folder then run the following:
```
npm install
```


Next, run the development servers. Open two separate terminals.

In the first terminal, start the Next.js development server:

```
npm run dev
```


In the second terminal, navigate to the backend directory and start the Python backend server:
```
cd backend
python main.py
```

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.
