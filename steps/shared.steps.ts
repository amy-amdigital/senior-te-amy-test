import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

export function sharedSteps() {
    Given('the user is on the Quartex site', async ({ page }) => {
        await page.goto('/');
    });

    When('the user clicks the button {string}', async ({ page }, buttonName) => {
        const button = page.getByRole('button', { name: buttonName, exact: true }).first();
        await expect(button).toBeVisible();
        await button.click();
    });
    
    Then('the user is navigated to the url {string}', async ({ page }, url) => {
        await expect(page).toHaveURL(new RegExp(url));
    });
}