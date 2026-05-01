# Agent-Forge — Landing page

Sitio estático (HTML + CSS + JS, sin build) para [Agent-Forge](https://github.com/IsraelLopezDeveloper/Agent-Forge).
Pensado para servirse desde **GitHub Pages** directamente desde la rama por defecto.

## Despliegue

1. Subir el repo a GitHub.
2. Settings → Pages → Source: `Deploy from a branch` → rama `main`, carpeta `/ (root)`.
3. La URL pública aparecerá en unos segundos.

El archivo `.nojekyll` evita que GitHub Pages procese el sitio con Jekyll.

## Desarrollo local

```bash
python3 -m http.server 8080
# o
npx serve .
```
