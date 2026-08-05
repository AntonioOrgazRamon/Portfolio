import { execFile } from 'node:child_process';
import { copyFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);
const __dirname = dirname(fileURLToPath(import.meta.url));

const htmlPath = join(__dirname, 'antonio-orgaz-ramon-cv.html');
const pdfPath = join(__dirname, 'Antonio-Orgaz-Ramon-CV.pdf');
const publicPdfPath = join(__dirname, '..', 'frontend', 'public', 'cv', 'Antonio-Orgaz-Ramon-CV.pdf');
const publicHtmlPath = join(__dirname, '..', 'frontend', 'public', 'cv', 'antonio-orgaz-ramon-cv.html');
const fileUrl = `file:///${htmlPath.replace(/\\/g, '/')}`;

const chromeCandidates = [
  process.env.CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  join(process.env.LOCALAPPDATA ?? '', 'Google\\Chrome\\Application\\chrome.exe'),
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  join(process.env.LOCALAPPDATA ?? '', 'Microsoft\\Edge\\Application\\msedge.exe'),
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean);

const chromePath = chromeCandidates.find((candidate) => existsSync(candidate));

if (!chromePath) {
  console.error('No se encontró Chrome ni Edge.');
  console.error('Instala Chrome o define CHROME_PATH con la ruta al ejecutable.');
  process.exit(1);
}

const args = [
  '--headless=new',
  '--disable-gpu',
  '--no-pdf-header-footer',
  `--print-to-pdf=${pdfPath}`,
  fileUrl,
];

try {
  await execFileAsync(chromePath, args);
  copyFileSync(htmlPath, publicHtmlPath);
  copyFileSync(pdfPath, publicPdfPath);
  console.log(`PDF ATS-safe generado:\n${pdfPath}`);
  console.log(`Copiado a:\n${publicPdfPath}`);
} catch (error) {
  console.error('Error al generar el PDF:', error.message);
  process.exit(1);
}
