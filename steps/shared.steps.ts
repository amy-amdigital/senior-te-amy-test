import { expect } from '@playwright/test';
import {Given, When, Then} from '../fixtures';

Given('the user is on the Quartex site', async ({ page }) => {
    await page.goto('/');
});

Given('the user selects the navigation dropdown {string} and navigates to {string}', async ({ page }, dropdownOption, pageName) => {
    const menuDropdown = page.getByLabel(dropdownOption, { exact: true })
    await menuDropdown.waitFor({ state: 'visible' });
    await menuDropdown.click();

    const pageLink = page.getByText(pageName);
    await pageLink.waitFor({ state: 'visible' });
    await pageLink.click();

});

Given('the user selects the navigation item {string}', async ({ page }, pageName) => {
    const pageLink = page.getByText(pageName);
    await pageLink.waitFor({ state: 'visible' });
    await pageLink.click();
});

When('the user clicks the button {string}', async ({ page }, buttonName) => {
    const button = page.getByRole('button', { name: buttonName, exact: true }).first();
    await button.waitFor({ state: 'visible' });
    await button.click();
});

When('the user clicks on the link {string}', async ({ page }, linkName) => {
    const link = page.getByRole('link', { name: linkName })
    await link.waitFor({ state: 'visible' });
    await link.click();
});

Then('the user is navigated to the url {string}', async ({ page }, url) => {
    await page.waitForLoadState();
    await expect(page).toHaveURL(new RegExp(url));
});

Then('the page header is equal to {string}', async ({ page }, headerText) => {
    const header = page.getByRole('heading', { name: headerText, level: 1, exact: true })
    await header.waitFor({ state: 'visible' });
    expect(header).toBeVisible();
});

Then('the number of results listed is equal to {int}', async ({ page }, expectedResults) => {
    const results = page.getByTestId('documentSearchResultContainer');
    await results.waitFor({ state: 'visible' });

    // Select only direct <li> elements
    const listItems = results.locator('> li'); 
    const resultsCount = await listItems.count();
    expect(resultsCount).toBe(expectedResults);
});

Then('the asset {string} is listed', async ({ page }, assetTitle) => {
    const results = page.getByTestId('documentSearchResultContainer');
    await results.waitFor({ state: 'visible' });

    const listItems = results.locator('> li');
    await expect(listItems.filter({ hasText: assetTitle })).toBeVisible();
});