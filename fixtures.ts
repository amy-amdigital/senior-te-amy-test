import { BrowserContext } from '@playwright/test';
import { test as base, createBdd } from 'playwright-bdd';

export interface Context extends BrowserContext {
    popup?: any;
}

export const test = base.extend({
    context: async ({ browser }, use) => {
      const sharedContext: Context = await browser.newContext();
  
      // Set up any event listeners on the context
      sharedContext.on('page', (page) => {
        page.on('popup', (popup) => {
          sharedContext.popup = popup;
        });
      });
  
      await use(sharedContext);
    },
});

export const { Given, When, Then } = createBdd(test);