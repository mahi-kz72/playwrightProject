import { expect } from '@playwright/test';

export class PricePage {
  constructor(page) {
    this.page = page;
    this.realTimePricesLink = page.getByRole('link', { name: 'قیمت لحظه‌ای همه‌ی رمزارزها' });
    this.usdtCell = page.getByRole('cell', { name: 'usdt تتر USDT' });
    this.paymentInput = page.getByPlaceholder('مقدار پرداختی');
    this.buyButton = page.getByLabel('خرید');
    this.loginHeading = page.getByRole('heading', { name: 'ورود به نوبیتکس' });
  }

  async navigate() {
    await this.page.goto('https://testnet.nobitex.ir');
  }

  async clickRealTimePrices() {
    await this.realTimePricesLink.click();
  }

  async selectUsdt() {
    await expect(this.usdtCell).toBeVisible();
    await this.usdtCell.click();
  }

  async enterPaymentAmount(amount) {
    await expect(this.paymentInput).toBeVisible();
    await this.paymentInput.fill(amount);
  }

  async clickBuy() {
    await this.buyButton.click();
  }

}
