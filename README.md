# habanero-bee-google-apps-script

This is Google Apps Script, which is used in an open source CMS software called `Habanero Bee`.



## Setup Google Sheets

To use this, you need to set up Google Sheets by yourself.
This section explains how to set it up.

### Create three sheets

Create three sheets.

* general
* meta
* content

Also, set up an item in each of the first columns.

#### general

* title
  * Site title
* description
  * Site description
* logoImage
  * Site logo(Site image)
* logoImageAltText
  * Site logo alt text
* websiteLink
  * If you have another site, please enter your site URL.
* twitterLink
* instagramLink
* facebookLink
* githubLink
* tumblrLink
* patreonLink
* quoraLink

#### meta

Enter the meta information for the site.

* siteUrl
  * URL of this site
* title
  * Title of this site
* description
  * Description of this site
* keywords
  * Keywords of this site
* ogpImage
  * URL of the image you want to set as the OGP image for your site.
* googleAnalyticsTrackingId
  * If you want to set up Google Analytics, please enter it.
* googleSiteVerificationCode
  * If you do not want to set up Google Analytics, but only Google Search Console, please set up a `Google Site Verification Code` here.

#### content

* title
  * A title for each page
* description
  * A description for each page
* text
  * A text for each page
    * You can use markdown. However, the use of `#(h1 tag)` and `##(h2 tag)` is not recommended for SEO reasons.
* imagePath
  * A image path(URL) for each page
* imageAltText
  * A image alt text for each page
* slug
  * A slug(URL) for each page
* externalLinkUrl
  * If you have a link to an external page, please enter it.
* externalLinkText
  * If you have a link to an external page, please enter the text of the link. If nothing is entered, it will be set to `Read` by default.
* tags
  * A tags for each page. When you set a tag, the page for the tag you set will also be generated.



### Add content

Add the actual content to be displayed to the added items in the second column.



`general` and `meta` should only be added to the second column.

For `content`, add as much content as you want to display!
