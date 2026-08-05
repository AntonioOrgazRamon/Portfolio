# Despliegue en Vercel

## Proyecto

- **Vercel project:** `cebollitafritas-projects/frontend`
- **Root Directory:** `frontend` (el resto del repo — `cv/`, `design-system/`, `scripts/`, etc. — se ignora en el build)
- **Framework Preset:** Vite
- **Build Command:** `npm run build` (equivale a `tsc -b && vite build`)
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **Producción:** rama `main` — cada push la despliega automáticamente
- **Preview:** cualquier otra rama / PR genera un deployment de preview propio

Configuración explícita en [`frontend/vercel.json`](frontend/vercel.json).

## Despliegue manual (CLI)

```bash
cd frontend
vercel          # preview
vercel --prod   # producción
```

Requiere `vercel login` y que el proyecto esté vinculado (`vercel link`, ya hecho — ver `frontend/.vercel/`, no versionado).

## Variables de entorno

Ninguna requerida: es un sitio 100% estático, sin backend ni claves. `frontend/.env.production` (`VITE_SITE_URL`) no se usa actualmente en el código.

## Conectar un dominio propio (Hostinger)

El dominio se sigue **comprando/gestionando en Hostinger**, pero el hosting real pasa a ser Vercel:

1. En el [dashboard de Vercel](https://vercel.com/dashboard) → proyecto `frontend` → **Settings → Domains** → añade tu dominio (p. ej. `portfolio.nakedcode.es` o el que uses).
2. Vercel te da los registros DNS a crear. Para un **subdominio** (`portfolio.tudominio.com`):
   - Tipo `CNAME`, host `portfolio`, valor `cname.vercel-dns.com`
   Para el **dominio raíz** (`tudominio.com`):
   - Tipo `A`, host `@`, valor `76.76.21.21` (o el que indique el panel de Vercel — puede variar)
3. En Hostinger → **hPanel → Dominios → DNS / Nameservers** de ese dominio, crea esos registros (no muevas el resto del DNS si el dominio se usa para más cosas).
4. Espera la propagación (minutos a unas horas) — Vercel emite el certificado SSL automáticamente en cuanto detecta el DNS correcto.
5. Verifica en Settings → Domains que aparece como "Valid Configuration".

No hace falta tocar nada del `.htaccess` ni subir archivos manualmente: cada push a `main` en GitHub se despliega solo.
