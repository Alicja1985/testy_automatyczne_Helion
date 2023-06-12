import { helionHomeUrl, searchProductUrl,cartUrl } from "../../config/pagesURL";
import SearchbarPage from "../../pages/components/SearchbarPage";
import SearchReasultPage from "../../pages/SearchReasultPage";
import { alertMaessage, deletedProductmassage, searchPhrase } from "../../config/data";
import Productpage from "../../pages/components/Productpage";
import CartPage from "../../pages/components/CartPage";
describe("E2E - Products", async() =>{

    let productTitle:string = "";
    let price:string ="";
before (()=>{
            browser.url(helionHomeUrl);
})
it("Shoud type phrase and click search icon", async() =>{
    await SearchbarPage.typSearchPhrase(searchPhrase);
    await SearchbarPage.clickOnSearchicon();
    await expect(browser).toHaveUrl(searchProductUrl);
})
it("should click on first book", async() =>{
 await SearchReasultPage.ClickOnFirstBookItem();
 await browser.pause(3000);
 await Productpage.productTitleisVisible();
 await Productpage.addTocardbtnIsVisible();
 productTitle =await Productpage.getProductTitleValue();
 price = await Productpage.getPtroductPrice();



} )
it("Should click on add cart button", async () =>{
    await Productpage.clickOnAddToCartBtn();
    await expect(browser).toHaveUrlContaining(cartUrl);
    console.log(await CartPage.getSuccesAlertValue());
    await expect( await CartPage.getSuccesAlertValue()).toContain(productTitle);
    await expect( await CartPage.getTotalPriceValue()).toContain(price);

})
it ("Shoud delete product from cart", async() =>{
    await CartPage.clickOnCheckboox();
    await CartPage.ClickOndeleteSelectedLabel();
    await browser.pause(3000);
    await expect(await browser.getAlertText()).toContain(alertMaessage);
    await CartPage.acceptdeleteAlert();
    console.log(await CartPage.getdeletedAlertMassageValue());
    await expect(await CartPage.getdeletedAlertMassageValue()).toContain(deletedProductmassage);

})
})