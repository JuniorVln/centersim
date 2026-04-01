import { chromium } from 'playwright';

(async () => {
    try {
        const browser = await chromium.launch();
        const page = await browser.newPage();
        await page.setViewportSize({ width: 1280, height: 800 });
        await page.goto('http://localhost:5173/');
        
        await page.waitForSelector('#contato');
        await page.locator('#contato').scrollIntoViewIfNeeded();
        await page.screenshot({ path: 'verify_form_layout_initial.png', fullPage: true });

        await page.fill('#nome', 'Teste User');
        await page.fill('#email', 'teste@xyz.com');
        await page.fill('#telefone', '1199999999');
        await page.fill('#mensagem', 'Teste de animação e layout');
        
        await page.click('button[type="submit"]');
        
        await page.waitForTimeout(1000);
        await page.waitForSelector('.success-icon-container', { state: 'visible', timeout: 3000 });
        
        await page.locator('#contato').scrollIntoViewIfNeeded();
        await page.screenshot({ path: 'verify_form_layout_success.png', fullPage: true });

        await browser.close();
        console.log('Test complete images saved');
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();
