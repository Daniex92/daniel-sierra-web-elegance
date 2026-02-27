# Portfolio - Ender Ramirez

## 🚀 Desplegar en GitHub Pages

### Paso 1: Configura el nombre de tu repositorio

En `vite.config.ts`, cambia `"/preview/"` por `"/NOMBRE-DE-TU-REPO/"`:

```ts
base: mode === "production" ? "/NOMBRE-DE-TU-REPO/" : "/",
```

> Si tu repo se llama `mi-portafolio`, entonces usa `"/mi-portafolio/"`.

### Paso 2: Genera el build de producción

```sh
npm install
npm run build
```

Esto creará la carpeta `docs/` con los archivos listos para desplegar.

### Paso 3: Sube los cambios a GitHub

```sh
git add .
git commit -m "Build para GitHub Pages"
git push origin main
```

### Paso 4: Activa GitHub Pages

1. Ve a tu repositorio en GitHub.
2. Haz clic en **Settings** → **Pages** (menú lateral izquierdo).
3. En **Source**, selecciona **Deploy from a branch**.
4. En **Branch**, selecciona `main` y la carpeta `/docs`.
5. Haz clic en **Save**.

### Paso 5: Accede a tu sitio

Después de unos minutos, tu sitio estará disponible en:

```
https://TU-USUARIO.github.io/NOMBRE-DE-TU-REPO/
```

---

## 🔄 Actualizar el sitio

Cada vez que hagas cambios:

```sh
npm run build
git add .
git commit -m "Actualización del sitio"
git push origin main
```

GitHub Pages se actualizará automáticamente.

## Tecnologías

- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
