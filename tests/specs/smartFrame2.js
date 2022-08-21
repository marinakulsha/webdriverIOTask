import LandingPage from "../../pages/landingPage";

const textData = require("../../data/textData");

describe("Smoke tests : SmartFrame_2", function() {
  it('Visit smartFrame_2, check "Share" button, click "SF" link', async function() {
    await browser.url("/p/w.html");
    await expect(browser).toHaveTitle(textData.titleLandingPage2);
    await LandingPage.imageIframe2.moveTo();
    await expect(await LandingPage.shareBtn).toBeDisplayed();
    await expect(await LandingPage.shareBtnText).toHaveTextContaining(textData.shareBtnText);
    const sfLink = LandingPage.sfLink;
    await expect(sfLink).toBeDisplayed();
    await expect(sfLink).toBeClickable();
    await sfLink.click();
    await browser.switchWindow(textData.smartFrameTitle);
    await expect(await browser.getTitle()).toEqual(textData.smartFrameTitle);
    await browser.switchWindow(textData.titleLandingPage2);
    await expect(await browser.getTitle()).toEqual(textData.titleLandingPage2);
  });
});


