# 静的HTML版 APEXサイト

このフォルダは、WordPressやCMSを使わずにアップロードできる静的HTML版です。

## アップロードするもの

サーバーの公開ディレクトリに、`html-site` フォルダ内の以下をそのままアップロードしてください。

```text
index.html
about.html
style.css
assets/
```

## 更新方法

- TOPページの文章や記事カードを変更する場合は `index.html` を編集します。
- 私たちについてページを変更する場合は `about.html` を編集します。
- 画像を差し替える場合は `assets/images/` に画像を置き、HTML内の `src` を変更します。
- デザインを変更する場合は `assets/css/field.css` と `assets/css/main.css` を編集します。

## 注意

お問い合わせフォームは見た目のみです。実際に送信したい場合は、フォームサービス、Googleフォーム、またはサーバー側のメール送信プログラムに接続してください。

