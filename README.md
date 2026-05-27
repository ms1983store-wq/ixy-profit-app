# Canon IXY 仕入れ判断ツール

メルカリの直近3ヶ月相場をもとに、Canon IXYの型番、カラー、仕入れ金額から利益額、利益率、仕入れ判定を計算する静的Webアプリです。

## 使い方

`index.html` をブラウザで開くだけで使えます。

型番はプルダウンから選択します。カラーはシルバー、ブラック、ピンク、その他から選べ、選択カラーに応じた補正後の販売見込みで判定します。

## 恒久公開

### GitHub Pages

1. このフォルダをGitHubリポジトリへpushします。
2. GitHubのリポジトリ設定で `Settings > Pages > Build and deployment > Source` を `GitHub Actions` にします。
3. `main` ブランチへpushすると `.github/workflows/pages.yml` が自動で公開します。

公開URLは通常 `https://<ユーザー名>.github.io/<リポジトリ名>/` になります。

### Cloudflare Pages

`ixy-profit-app-pages.zip` をCloudflare PagesのDirect Uploadにアップロードすると公開できます。

## ファイル

- `index.html`: 画面
- `styles.css`: スタイル
- `app.js`: 相場データと計算ロジック
