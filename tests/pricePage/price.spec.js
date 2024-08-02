import { test } from '@playwright/test';
import { PricePage } from '../pom/pricePage';

test('Test Nobitex functionality', async ({ page }) => {
  const pricePage = new PricePage(page);

  await pricePage.navigate();
  await pricePage.clickRealTimePrices();
  await pricePage.selectUsdt();
  await pricePage.enterPaymentAmount('10');
  await pricePage.clickBuy();
});
