import { expect } from '@playwright/test';
import {Given, When, Then} from '../fixtures';

Given('the user has performed a search for {string}', async ({ page }, searchTerm) => {
    await page.goto('/');
    await page.getByTestId('toggleSearchButton').click();
    await page.getByTestId('mastheadSearch').fill(searchTerm);
    await page.getByTitle('Apply Search').click();

    // User is navigated to the search results page
    await expect(page).toHaveURL(/documents/); 
});

When('the user enters the search term {string}', async ({page}, searchTerm) => {
    await page.getByTestId('toggleSearchButton').click();
    await page.getByTestId('mastheadSearch').fill(searchTerm);
    await page.getByTitle('Apply Search').click();
});

When('the user selects to filter the search results by the collection {string}', async ({ page }, collection) => {
    const collectionLabel = page.locator('label').filter({ hasText: collection });
    await collectionLabel.waitFor({ state: 'visible' });
    await collectionLabel.click();
});

When('there are no assets meeting the search criteria', async ({ page }) => {
    const pageNumberInput = page.locator('#pagination-top-page').first();
    await pageNumberInput.waitFor({ state: 'visible' });
    expect(await pageNumberInput.inputValue()).toBe('1');

    
    const numberOfResults = page.getByText('Showing 0-0 of');
    await expect(numberOfResults).toBeVisible();
});

Then('the first page of search results is displayed', async ({ page }) => {
    const pageNumberInput = page.locator('#pagination-top-page').first();
    await pageNumberInput.waitFor({ state: 'visible' });
    expect(await pageNumberInput.inputValue()).toBe('1');
});

Then('a message is output informing the user that no results are available', async ({ page }) => {
    const noResultsMessage = page.getByText('Sorry, no results found that match your criteria.');
    await expect(noResultsMessage).toBeVisible();
});