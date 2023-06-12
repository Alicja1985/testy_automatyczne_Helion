class SearchbarPage{
    get searchInput(){
        return $("#inputSearch");
    }
    get serchIcon(){
        return $("//button[contains(text(), 'Szukaj')]");
    }

    get  suggestPopup(){
        return $("form#szukanie div.suggest-list");
    }
    get seeAllBooksBtn(){
        return $("li.wszystkie > p> a");


    }
    get notFounfAlert(){
        return $("div.not-found");
    }
    async getNotFoundAlertTest():Promise<string>{
        const alert:WebdriverIO.Element = await this.notFounfAlert;
        await alert.waitForDisplayed();
        return await alert.getText();
    }
    async getInputvalue():Promise<string>{
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        return await input.getValue();
    }

    async clearSearchBar(){
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        await input.clearValue();
    }

    async clickOnSeeAllBooksBtn(){
        const btn:WebdriverIO.Element = await this.seeAllBooksBtn;
        await btn.waitForDisplayed();
        await btn.scrollIntoView();
        await btn.click();
    }

    async suggestPopupisVisible(){
        const popup:WebdriverIO.Element = await this.suggestPopup;
        await popup.waitForDisplayed();
    }

    async typSearchPhrase(value: string){
         const input:WebdriverIO.Element = await  this.searchInput;
         await input.waitForDisplayed();
         await input.setValue(value);

    }

    async clickOnSearchicon(){
        const icon:WebdriverIO.Element = await this.serchIcon;
        await icon.waitForDisplayed();
        await icon.click();
    }

    async searchBarIsVisible(){
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
    }
}
export default new SearchbarPage();