class LandingPage {
  get iframe_1() {
    return $('.smartframe-embed');
  }

  get imageIframe1() {
    return $("#smartframe");
  }

  get captionIframe() {
    return $('div[data-layer="main"]>div>div>div>p');
  }

  get embedLink() {
    return $('a[data-button-embed]');
  }

  get copyEmbedBtn() {
    return $('button[data-action-button="copy-embed-code"]');
  }

  get imageIframe2() {
    return $('.on-site');
  }

  get shareBtn() {
    return $('a[data-title="Share"]');
  }

  get shareBtnText() {
    return $('a[data-title="Share"]>span');
  }

  get sfLink() {
    return $('a[data-button-custom]');
  }
}

export default new LandingPage();