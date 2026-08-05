import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const frontendDir = join(root, 'frontend');
const distDir = join(frontendDir, 'dist');
const releaseDir = join(root, 'release');
const cvScript = join(root, 'cv', 'generate-pdf.mjs');

console.log('→ Build de producción…');
execSync('npm run build', { cwd: frontendDir, stdio: 'inherit' });

if (existsSync(cvScript)) {
  try {
    console.log('→ Generando CV en PDF…');
    execSync('node generate-pdf.mjs', { cwd: join(root, 'cv'), stdio: 'inherit' });
    execSync('npm run build', { cwd: frontendDir, stdio: 'inherit' });
  } catch {
    console.warn('⚠ No se pudo generar el PDF del CV. Sube el PDF manualmente a frontend/public/cv/ y vuelve a ejecutar.');
  }
}

const required = ['index.html', '.htaccess', 'robots.txt', 'sitemap.xml', 'favicon.svg'];
for (const file of required) {
  if (!existsSync(join(distDir, file))) {
    console.error(`✗ Falta ${file} en dist/. Revisa el build.`);
    process.exit(1);
  }
}

if (existsSync(releaseDir)) rmSync(releaseDir, { recursive: true, force: true });
mkdirSync(releaseDir, { recursive: true });
cpSync(distDir, releaseDir, { recursive: true });

console.log('');
console.log('✓ Listo para Hostinger');
console.log(`  Carpeta local: ${releaseDir}`);
console.log('  Sube TODO el contenido de /release al directorio public_html del dominio portfolio.nakedcode.es');
console.log('');
