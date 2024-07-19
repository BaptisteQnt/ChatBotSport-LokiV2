// src/__tests__/integration.test.js
import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import path from 'path';

describe('Integration Test', () => {
  let browser;
  let page;
  let serverProcess;

  beforeAll(async () => {
    // Démarrer le serveur de back-end
    const serverPath = path.resolve(__dirname, '../../../Back/server.js');
    serverProcess = spawn('node', [serverPath]);

    // Attendre que le serveur démarre
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Lancer Puppeteer avec une instance locale de Chromium
    browser = await puppeteer.launch({
      headless: true,
    });
    page = await browser.newPage();
  }, 10000); // Augmenter le délai pour permettre au serveur de démarrer

  afterAll(async () => {
    if (browser) {
      await browser.close();
    }
    if (serverProcess) {
      serverProcess.kill();
    }
  });

  test('should display athlete data when name is provided', async () => {
    await page.goto('http://localhost:3000');

    // Simuler la saisie du nom de l'athlète
    await page.type('#athleteName', 'Usain Bolt');

    // Simuler le clic sur le bouton pour obtenir les informations
    await page.click('#getAthleteInfoButton');

    // Attendre la réponse et vérifier le contenu
    await page.waitForSelector('#athleteData');
    const text = await page.$eval('#athleteData', el => el.textContent);

    expect(text).toContain('Informations pour l\'athlète Usain Bolt');
  });
});
