class ProductPage{
    get productTitle(){
        return $("div.title-group >h1>span[itemprop='name']");
    }
    get addToCartBTN(){
        return $("a#addToBasket_pokr3v");

    }
    get productPrise(){
        return $ ("ins#cena_d");

    }
    async getPtroductPrice(): Promise<string>{
        const price:WebdriverIO.Element = await this.productPrise;
        await price.waitForDisplayed();
        return await price.getText();

    }

    async clickOnAddToCartBtn(){
        const btn:WebdriverIO.Element = await this.addToCartBTN;
        await btn.waitForDisplayed();
        await btn.click();
    }
    async getProductTitleValue():Promise<string>{
        const title:WebdriverIO.Element = await this.productTitle;
        await title.waitForDisplayed();
        return await title.getText();
    }

    async productTitleisVisible(){
        const title:WebdriverIO.Element = await this.productTitle
        await title.waitForDisplayed();

    }
    async addTocardbtnIsVisible(){
        const btn:WebdriverIO.Element = await this.addToCartBTN
        await btn.waitForDisplayed();
    }

}
export default new ProductPage();
