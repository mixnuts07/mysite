### TODO

- Home画面
  - それぞれのPOSTの画像を見ることができる。
- blog画面
  - それぞれのPOSTの画像を見ることができる。
  - Update 順に表示することができる
- blog詳細画面
  - 1つ前のページに戻ることができる
  - 本文を中央寄せで見ることができる
  - 本文の長さが画面に切れないようにする
  - リッチな Body を表示することができる
  - Tag を表示することができる
- other
  - Blogが追加されたときにビルドするようにする
  - Vercel のドメインを取得する（12 月？）

### Contentful Memo

- Space...データの置き場で、記事データ（Entity）を管理する。
- 記事データは Content Model（タイトル、本文、日付など）どんな項目で構成するかという雛形の定義を元に作られる。

### 参考URL

- https://github.com/contentful/nextjs-tailwind-blog/blob/4cdcde9c45174d9c28a21261198e215dc9b01e57/src/app/articles/%5Bslug%5D/page.tsx#L28
- https://www.contentful.com/blog/build-blog-next-js-tailwind-css-contentful/
- [型定義ファイルを作成して body を表示する](https://silurus.dev/articles/7DJobP47XUTkDjNavzyf2s)(https://blog.chick-p.work/blog/contentful-nextjs-blog/)
- [Contentful + Next.js + Vercel でブログを作る](https://blog.chick-p.work/blog/contentful-nextjs-blog/#create-nextjs-contentful)
