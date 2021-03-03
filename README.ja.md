# habanero-bee-google-apps-script

これは [Habanero Bee](https://github.com/shinshin86/habanero-bee) というオープンソースのCMSソフトウェアで利用される、Google Apps Scriptです。

こちらのGoogle Apps Scriptをセットしてウェブアプリとしてデプロイすることで、Google スプレッドシートで管理している情報を [Habanero Bee](https://github.com/shinshin86/habanero-bee) から参照することが可能となります。


## Google スプレッドシートのセットアップ

これを利用するには、自分でGoogle スプレッドシートを設定する必要があります。
ここではその設定方法を説明します。

### シートの作成

下記の３つのシートを作成します。

* general
* meta
* content

そして、１列目にそれぞれ項目名を入力します。
項目名はこのあと説明します。

また、2列目には実際に表示する内容を追加します。
`general`と`meta`は2番目のカラムにのみ値を追加すればよいですが、
`content`については、表示したい分のコンテンツを追加してください。

#### general

* title
  * サイトのタイトル
* description
  * サイトの説明
* logoImage
  * サイトのロゴ画像
* logoImageAltText
  * サイトのロゴ画像のAltテキスト
* websiteLink
  * 他にもサイトをお持ちの方は、サイトURLを入力してください。
* twitterLink
* instagramLink
* facebookLink
* githubLink
* tumblrLink
* patreonLink
* quoraLink
* backgroundColor
  * 背景色を設定するオプションです。変更しない場合は入力する必要はありません。
* pageTopButtonColor
  * ページトップボタンの色を設定するオプションです。変更しない場合は入力する必要はありません。

#### meta

サイトのメタ情報を入力していきます。

* siteUrl
  * このサイトのURL
* title
  * サイトのタイトル
* description
  * サイトの説明
* keywords
  * サイトのキーワード(カンマ区切りで複数可)
* ogpImage
  * サイトのOGP画像として設定したい画像のURL
* googleAnalyticsTrackingId
  * Googleアナリティクスを設定したい方は入力してください。
* googleSiteVerificationCode
  * Googleアナリティクスを設定せずにGoogle Search Consoleだけを設定したい場合は、こちらで`Google Site Verification Code`を設定してください。

#### content
コンテンツは必要な分だけ、行を追加して追加してください。
行の数だけ、ページが生成されます。

* title
  * ページのタイトル
* description
  * ページの説明
* text
  * ページの本文
    * markdownを使用することができます。ただし、SEOの観点から `#(h1 tag)` と `##(h2 tag)` を使用することは推奨されません。それらはページの枠組みで既に使用されているからです。
* imagePath
  * ページごとの画像URL
* imageAltText
  * ページごとの画像のAltテキスト
* slug
  * ページのslug(URL)
* externalLinkUrl
  * 外部ページへのリンクがある場合は入力してください。
* externalLinkText
  * 外部ページへのリンクがある場合は、リンクに表示するテキストも入力してください。何も入力しない場合、デフォルトでは `Read` が表示されます。
* tags
  * ページのタグです。タグを設定すると、設定したタグのページも併せて生成されます。



## ウェブアプリとしてのリリース手順

Google スプレッドシートのセットアップが完了したら、Google Apps Scriptの設定、ならびにウェブアプリとしてのリリースを行います。

これを行うことで、Habanero BeeからGoogle スプレッドシートのデータが参照できるようになります。

<font color="red">なお、この手順を行うことでGoogle スプレッドシートに記載したデータは外部から参照できるようになります。外部に漏れてほしくないデータがないかを、リリース前に再度ご確認ください。</font>



### 1. Google スプレッドシートからスクリプトエディタを開く

![Google スプレッドシートからスクリプトエディタを開く](./images/ja/setup-01.png)



### 2. Google Apps Scriptを入力し、デプロイボタンを押す

[こちらに記載されているGoogle Apps Scriptのコード](https://raw.githubusercontent.com/shinshin86/habanero-bee-google-apps-script/main/habanero-bee-google-apps-script.gs)をキャプチャのようにエディタ内にコピーしてから、デプロイボタンを押してください。

![Google Apps Scriptを入力し、デプロイボタンを押す](./images/ja/setup-02.png)



### 3. 新しいデプロイを選択

![新しいデプロイを選択](./images/ja/setup-03.png)

### 4. 種類の選択で「ウェブアプリ」を選択し、アクセスできるユーザーを「全員」に設定します

`アクセスできるユーザー` というところはデフォルトの状態にしてください。
(`自分(自身のメールアドレスがここに表示されています)` が選択されている状態となっています)

![種類の選択で「ウェブアプリ」を選択し、アクセスできるユーザーを「全員」に設定します](./images/ja/setup-04.png)

### 5. アクセスの承認を行い、完了を押す

アクセスの承認を押すと、承認するかどうかを尋ねられます。それについてはこの後の6で説明します。

![アクセスの承認を行い、完了を押す](./images/ja/setup-05.png)

### 6. 承認を行う

承認を行う際は、表示される画面に従うことで問題なく完了できますが、一点だけ分かりにくい箇所があるので、そちらについて説明します。

承認の際に下記のような画面が表示されますが、この画面が出たら、`詳細を表示`をボタンを押して画面下部のテキストをまずは表示させます。
(最初、詳細を表示するまでは画面下部のテキストは表示されていません)

画面下部のテキストを表示させたら、`無題のプロジェクト(安全ではないページ)に移動` を選択して、移動した後の画面で画面に従って承認を行います。
(画面内では`無題のプロジェクト` と表示されていますが、これは設定したプロジェクト名によって文言が異なります)

![承認を行う](./images/ja/setup-06.png)

### 7. 生成されたURLをコピーして完了

生成されたウェブアプリのURLをコピーしてください。このURLは[Habanero Bee](https://github.com/shinshin86/habanero-bee)のリリース時に用いるURLとなりますので、メモ帳などに保存してください。

URLを保存したら、完了を押します。

お疲れさまです。これで [Habanero Bee](https://github.com/shinshin86/habanero-bee) からGoogleスプレッドシートの情報を参照するためのセットアップ作業は完了です。

![生成されたURLをコピーして完了](./images/ja/setup-07.png)

## Licence
[MIT](https://github.com/shinshin86/habanero-bee-google-apps-script/blob/main/LICENSE)

## Author
[Yuki Shindo](https://shinshin86.com)