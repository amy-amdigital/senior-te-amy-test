/** Generated from: features\browse-by-collection.feature */
import { test } from "../../fixtures.ts";

test.describe("Browse by collection", () => {

  test("Scroll to collection", async ({ Given, page, And, When, Then }) => {
    await Given("the user is on the Quartex site", null, { page });
    await And("the user selects the navigation item \"Explore the Collections\"", null, { page });
    await When("the user selects the letter \"W\"", null, { page });
    await Then("the page is scrolled to show all collections starting with \"W\"", null, { page });
  });

  test("View collection from letter", async ({ Given, page, And, When, Then }) => {
    await Given("the user is on the Quartex site", null, { page });
    await And("the user selects the navigation item \"Explore the Collections\"", null, { page });
    await When("the user clicks on the link \"War & Conflict\"", null, { page });
    await Then("the user is navigated to the url \"explore-the-collections/war-conflict\"", null, { page });
    await And("the page header is equal to \"War & Conflict\"", null, { page });
    await And("the number of results listed is equal to 18", null, { page });
    await And("the asset \"Memoirs of a Prisoner of War\" is listed", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("features\\browse-by-collection.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Scroll to collection": {"pickleLocation":"3:5"},
  "View collection from letter": {"pickleLocation":"9:5"},
};