# QA Automation Pipeline con Playwright y GitHub Actions

Proyecto de automatización de pruebas E2E que demuestra **DevSecOps** y **CI/CD** aplicado a QA: tests ejecutados en cada push, reportes publicados como artefactos y pipeline reproducible en la nube.

## Habilidades demostradas

- **QA automatizado:** Pruebas E2E con Playwright (Chromium, Firefox, WebKit), selectores robustos y buenas prácticas.
- **CI/CD:** Pipeline en GitHub Actions que se dispara en cada `push`, instalación de dependencias y navegadores, ejecución de tests y publicación de artefactos.
- **DevSecOps:** Integración de calidad en el flujo de desarrollo, feedback rápido y trazabilidad mediante reportes y artefactos.

## Requisitos

- Node.js 18+
- npm

## Instalación local

```bash
npm install
npx playwright install --with-deps
```

## Ejecutar tests

```bash
npm run test
```

Otras opciones:

- `npm run test:headed` — ejecución con navegador visible.
- `npm run test:ui` — modo UI de Playwright.
- `npm run report` — abrir el último reporte HTML local.

## Pipeline en GitHub Actions

El workflow `.github/workflows/playwright.yml` se ejecuta en cada **push** a las ramas `master` o `main`. Realiza:

1. Checkout del código.
2. Configuración de Node.js y caché de npm.
3. Instalación de dependencias (`npm ci`).
4. Instalación de navegadores Playwright.
5. Ejecución de los tests.
6. Subida de artefactos: reporte HTML y, en caso de fallo, resultados (screenshots, traces, videos).

## Cómo ver los artefactos (reportes) en GitHub Actions

1. Entra al repositorio en GitHub.
2. Abre la pestaña **Actions**.
3. Elige la ejecución (workflow run) que quieras revisar.
4. En la página del run, baja hasta la sección **Artifacts**.
5. Ahí verás:
   - **playwright-report:** reporte HTML de la ejecución. Descárgalo, descomprime el ZIP y abre `index.html` en el navegador para ver resumen, tests, fallos y tiempos.
   - **test-results:** (solo si hubo fallos) capturas, traces y videos de los tests fallidos. Útil para depuración.

El reporte HTML se genera siempre; los `test-results` solo cuando algún test falla. Los artefactos tienen retención limitada (14 días el reporte, 7 días los resultados de fallos) según la configuración del workflow.

## Estructura del proyecto

```
.
├── .github/workflows/
│   └── playwright.yml    # Pipeline CI: tests en cada push
├── tests/
│   └── example.spec.ts   # Pruebas de humo contra Playwright Docs
├── playwright.config.ts  # Configuración de Playwright y reporters
├── package.json
└── README.md
```

## Licencia

Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo `LICENSE` para ver el texto completo.
