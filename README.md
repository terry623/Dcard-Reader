# Dcard Reader

> 瀏覽 Dcard 時下最熱門的文章！

[Live Demo](https://terry-dcard-reader.vercel.app/)

![image](./public/demo.gif)

## Features

- 使用 Intersection Observer API 實現 Infinite Scroll
- 使用 Next.js 的 Serverless API Routes‌ 呼叫 Dcard API，避免 CORS 的問題
- 使用 Styled Components 撰寫 CSS 樣式
- 使用 ESLint 和 Prettier 規範 Coding Style，Husky 和 Lint-staged 測試是否符合規範

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## File Structure

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

```
dcard-reader
├── components
│   └── InfiniteScroll      # Infinite Scroll 實作
│   └── Loader              # 載入文字 UI
│   └── Post                # 單個文章 UI
│   └── PostsContainer      # 文章列表 UI
├── pages
│   └── api
│   │   └── posts.js        # 呼叫 Dcard 的 API
│   └── index.js            # 主要邏輯
├── services
│   └── api
│   │   └── base.js         # API 呼叫的基本型態＆狀況處理
│   │   └── index.js        # UI 呼叫各種 API 的 method
├── theme
│   └── index.js            # 主題，例如：Primary Color
└── .eslintrc.js            # ESlint 設定檔
└── .prettierrc             # Prettier 設定檔
```
