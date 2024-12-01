/** Generated from: features\basic-search.feature */
import { test } from "../../fixtures.ts";

test.describe("Quartex Basic Search", () => {

  test("Carry out basic search", async ({ Given, page, When, Then, And }) => {
    await Given("the user is on the Quartex site", null, { page });
    await When("the user enters the search term \"Brown\"", null, { page });
    await Then("the user is navigated to the url \"documents\"", null, { page });
    await And("the first page of search results is displayed", null, { page });
    await And("the asset \"1 April 1875. Browning, Robert to Pollock, Lady.\" is listed", null, { page });
  });

  test("Filtering Search Results", async ({ Given, page, When, And, Then }) => {
    await Given("the user has performed a search for \"Brown\"", null, { page });
    await When("the user selects to filter the search results by the collection \"Interwar Periodicals\"", null, { page });
    await And("the user clicks the button \"Apply\"", null, { page });
    await Then("the asset \"Woman's Weekly, July-December 1919\" is listed", null, { page });
  });

  test("Search returns no results", async ({ Given, page, When, Then }) => {
    await Given("the user has performed a search for \"Quartex\"", null, { page });
    await When("there are no assets meeting the search criteria", null, { page });
    await Then("a message is output informing the user that no results are available", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("features\\basic-search.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Carry out basic search": {"pickleLocation":"3:5"},
  "Filtering Search Results": {"pickleLocation":"10:5"},
  "Search returns no results": {"pickleLocation":"16:5"},
};