# Despliegue en Hostinger — portfolio.nakedcode.es

## 1. Antes de subir (en tu PC)

1. Revisa `frontend/src/data/profile.ts`:
   - GitHub y LinkedIn con tus URLs reales (ahora ocultos si siguen como `TU_USUARIO` / `TU_PERFIL`).
   - Email y `portfolioUrl` correctos.

2. Genera el paquete de producción:

```bash
cd c:\xampp\htdocs\PORTFOLIO
npm run deploy:prepare
```

Esto crea la carpeta **`release/`** con todo lo que hay que subir.

3. (Opcional) CV en PDF:

```bash
node cv/generate-pdf.mjs
npm run deploy:prepare
```

El PDF debe quedar en `release/cv/Antonio-Orgaz-Ramon-CV.pdf`.

---

## 2. En Hostinger (hPanel)

1. **Dominios** → confirma que `portfolio.nakedcode.es` apunta al hosting (registro A o subdominio).
2. **Sitios web** → el dominio del portfolio → **Administrador de archivos**.
3. Abre **`public_html`** (o la carpeta raíz del subdominio).
4. **Borra** archivos viejos del portfolio si los hay (no toques otros sitios si comparten carpeta).
5. Sube **el contenido** de `release/` (no la carpeta `release` en sí):
   - `index.html`
   - `.htaccess`
   - `robots.txt`
   - `sitemap.xml`
   - carpetas `assets/`, `projects/`, `tech/`, `cv/`, etc.

6. **SSL**: en hPanel activa **SSL gratuito** para el subdominio y fuerza HTTPS (el `.htaccess` ya redirige HTTP → HTTPS).

---

## 3. Comprobar

- https://portfolio.nakedcode.es/
- Descarga del CV
- Enlace de producción NakedCode: https://lapeatonal.nakedcode.es/
- Cambio de idioma / tema
- En móvil

---

## 4. Actualizar el sitio

Tras cambios en el código:

```bash
npm run deploy:prepare
```

Vuelve a subir el contenido de `release/` (o solo los archivos que hayan cambiado; lo más seguro es subir todo).

---

## Notas

- Es un sitio **estático** (HTML/CSS/JS). No hace falta Node.js en el servidor.
- Los iconos de tecnologías usan CDN (jsDelivr / Simple Icons); el servidor debe permitir conexiones salientes del navegador (normal en Hostinger).
- Si el sitio estuviera en un **subdirectorio** (ej. `tudominio.com/portfolio/`), habría que cambiar `base` en `frontend/vite.config.ts` y volver a hacer build.
