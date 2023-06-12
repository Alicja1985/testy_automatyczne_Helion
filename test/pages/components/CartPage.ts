class CartPage{
    get sucessAlert(){
        return $("div.successbox >p");
    }
    get totalPrice(){
        return $("h3#cart-edit-summary");
    }

    get checkBox(){
        return $("Form#formularz tr th.checkbox");
    }
    get deleteSelectedlabel() {
        return $("div#usun a");

    }
    get DeleteAlertmessage(){
        return $("div.infobox >p");
    }

    async getdeletedAlertMassageValue():Promise<string> {
        const alert:WebdriverIO.Element = await this.DeleteAlertmessage;
        await alert.waitForDisplayed();
        return await alert.getText();

    }

    async acceptdeleteAlert(){
        await browser.acceptAlert();
    }

    async ClickOndeleteSelectedLabel(){
        const label:WebdriverIO.Element = await this.deleteSelectedlabel;
        await label.waitForDisplayed();
        await label.scrollIntoView();
        await label.click();
    }

    async clickOnCheckboox(){
        const checkBox:WebdriverIO.Element = await this.checkBox;
        await checkBox.waitForDisplayed();
        await checkBox.scrollIntoView();
        await checkBox.click();
    }

    async getTotalPriceValue():Promise<string> {
        const price:WebdriverIO.Element = await this.totalPrice;
        await price.waitForDisplayed();
        return await price.getText();

    }
    async getSuccesAlertValue(){
        const alert:WebdriverIO.Element = await this.sucessAlert;
        await alert.waitForDisplayed();
        return alert.getText();

    }
}
export default new CartPage();