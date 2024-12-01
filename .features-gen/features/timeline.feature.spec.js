/** Generated from: features\timeline.feature */
import { test } from "../../fixtures.ts";

test.describe("Quartex Timeline Content Item Block", () => {

  test("Open timeline link in new tab", async ({ Given, page, And, When, Then, context }) => {
    await Given("the user is on the Quartex site", null, { page });
    await And("the user selects the navigation dropdown \"Discovery Aids\" and navigates to \"The Brownings: A Brief History\"", null, { page });
    await When("the Timeline is visible", null, { page });
    await And("the user clicks a hyperlink available on the Timeline content block", null, { page });
    await Then("the correct webpage is launched in a new tab", null, { context });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("features\\timeline.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Open timeline link in new tab": {"pickleLocation":"3:5"},
};