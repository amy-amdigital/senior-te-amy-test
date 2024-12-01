import { expect } from '@playwright/test';
import {Given, When, Then} from '../fixtures';

When('the user selects the letter {string}', async ({ page }, letter) => {
    const aTozRightButton = page.getByLabel('Scroll right');
    await expect(aTozRightButton).toBeVisible();
    await aTozRightButton.click();

    const letterButton = page.getByLabel(`Letter ${letter} link`)
    await letterButton.waitFor({ state: 'visible' });
    await letterButton.click();
});

Then('the page is scrolled to show all collections starting with {string}', async ({ page }, letter) => {
    const collectionHeader = page.getByRole('heading', { name: letter, exact: true })
    expect(collectionHeader).toBeInViewport();
});
