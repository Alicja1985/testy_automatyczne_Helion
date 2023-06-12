class GlobalPage {
    async OpenPage(pageUrl:string, expectedPageUrl:string){
        await browser.url(pageUrl);
        await expect(browser).toHaveUrl(expectedPageUrl)
    }
}
export default new GlobalPage();