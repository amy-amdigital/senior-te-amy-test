import { expect } from '@playwright/test';
import {Given, When, Then} from '../fixtures';

When('the Timeline is visible', async ({ page }) => {
    const timeline = page.locator('#section-timeline-2017-order-1');
    await expect(timeline).toBeVisible();
});

When('the user clicks a hyperlink available on the Timeline content block', async ({ page }) => {
    const loadingText = page.getByText('Loading...');
    await loadingText.waitFor({ state: 'visible' });
    await loadingText.evaluate((el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' }));    

    const link = page.getByRole('link', { name: 'one of their first love' }).first();
    await link.waitFor({ state: 'visible' });
    await link.click();
    await page.waitForEvent("popup");
});

Then('the correct webpage is launched in a new tab', async ({ context }) => {
    const popup = context.popup; // Access the shared popup context
    if (!popup) throw new Error('Popup not found');
  
    await popup.waitForLoadState();
    await expect(popup).toHaveURL('https://demo.quartexcollections.com/Documents/Detail/10-january-1845.-browning-robert-to-browning-elizabeth-barrett./36113');
});
