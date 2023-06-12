import GlobalPage from "../../pages/GlobalPage";
import { helionHomeUrl, notFoundUrl, SearchPageUrl } from "../../config/pagesURL";
import SearchbarPage from "../../pages/components/SearchbarPage";
import { incorectSearchPfrase, notFoundMessage, searchPhrase, searchReasultTitle } from "../../config/data";
import SearchReasultPage from "../../pages/SearchReasultPage";

describe("Test typu e2e - testy zwiazane z wyszukiwarką", async () =>{
    it("Powinna otworzys sie strona startowa helion.pl, zweryfikować url i wyświetlić searchbar ", async() => {
        await GlobalPage.OpenPage(helionHomeUrl, helionHomeUrl);
        await SearchbarPage.searchBarIsVisible();
    })
    it ("powinno kliknąc na ikone lupki i zweryfikowac url", async() => {
        await SearchbarPage.clickOnSearchicon();
        await expect(browser).toHaveUrl(helionHomeUrl); 


    } )
    it("Powinno byc widoczne okno z wartościa i zweryfikowany widok popapu", async () =>{
        await SearchbarPage.typSearchPhrase(searchPhrase);
        
        await SearchbarPage.suggestPopupisVisible();
    })
    it ("Powinno kliknąc we wszystkie", async () => {
        await SearchbarPage.clickOnSeeAllBooksBtn();
               await expect(browser).toHaveUrl(SearchPageUrl);
               await browser.pause(3000);
        
    })
    it ("czy jest porawny nagłówek i czy jest poporawna ilość ksiązek ", async() =>{
        const title:string = await SearchReasultPage.getPageTitle();
        const numberOfBooks:number = await SearchReasultPage.getNumberofBooks();
        await expect(await SearchReasultPage.getPageTitle()).toContain(searchReasultTitle);
        await expect(await SearchReasultPage.getNumberofBooks()).toEqual(3);
        await browser.pause(3000);
    })
  it("powinno wyczyścic się value", async () =>{
    await SearchbarPage.clearSearchBar();
    await expect(await SearchbarPage.getInputvalue()).toContain("");
  })
  it("powinno zweryfikować niepoprawne ksiązkii wyswietlić alert", async() =>{
 await SearchbarPage.typSearchPhrase(incorectSearchPfrase);
 await SearchbarPage.clickOnSearchicon();
 await expect(await SearchbarPage.getNotFoundAlertTest()).toContain(notFoundMessage);
 await browser.pause(3000);

  })
 it ("czyścimy pole wyszukiwania i klikamy w lupkę", async () =>{
   await SearchbarPage.clearSearchBar();
   await SearchbarPage.clickOnSearchicon();
   await expect(browser).toHaveUrl(notFoundUrl);
   await expect(await SearchbarPage.getInputvalue()).toContain(incorectSearchPfrase);
 
 })
})