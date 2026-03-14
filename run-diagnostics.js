const { spawn } = require('child_process');
const playwright = require('playwright');
const fs = require('fs');

(async () => {
    console.log("Starting vite server...");
    const server = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run', 'dev'], { cwd: process.cwd() });

    server.stdout.on('data', d => console.log('VITE:', d.toString()));
    server.stderr.on('data', d => console.error('VITE ERR:', d.toString()));

    // Wait roughly 4s for server to start
    await new Promise(r => setTimeout(r, 4000));

    console.log("Starting playwright...");
    const browser = await playwright.chromium.launch();
    const page = await browser.newPage();

    page.on('console', msg => console.log('BROWSER CONSOLE:', msg.type(), msg.text()));
    page.on('pageerror', error => console.error('BROWSER ERROR:', error.message));

    console.log("Navigating to Schedule Page...");
    await page.goto('http://localhost:5173/schedule');

    // Wait for LaserFlow and everything to settle
    await page.waitForTimeout(3000);

    await page.screenshot({ path: 'debug-screenshot.png' });
    console.log("Screenshot saved.");

    await browser.close();
    server.kill();
    process.exit(0);
})();
