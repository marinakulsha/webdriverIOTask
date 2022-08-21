import LandingPage from "../../pages/landingPage";

const textData = require("../../data/textData");

describe("Smoke tests : SmartFrame_1", function() {
  it('Visit smartFrame_1, check caption, click "Embed" link', async function() {
    await browser.url("/p/e.html");
    await expect(browser).toHaveTitle(textData.titleLandingPage1);
    await LandingPage.iframe_1.moveTo();
    await browser.switchToFrame(await LandingPage.iframe_1);
    await LandingPage.imageIframe1.moveTo();
    await expect(await LandingPage.captionIframe).toExist();
    await LandingPage.captionIframe.moveTo();
    await expect(await LandingPage.captionIframe).toHaveTextContaining(textData.captureText);
    const embedLink = LandingPage.embedLink;
    await expect(embedLink).toBeDisplayed();
    await embedLink.click();
    await expect(await LandingPage.copyEmbedBtn).toBeDisplayed();
  });
});


