# strapi-ethwallet-custom-field

A Strapi v4 plugin, written in TypeScript, that set out to add an Ethereum wallet address field to Strapi content types. What it ships is an admin panel page for looking up the ETH balance of an Ethereum address through the Etherscan API. It is for Strapi developers who want a starting point for Ethereum features in the admin panel.

> **Status:** archived. Built in 2024. Kept for reference, not maintained.

![Plugin logo](https://github.com/izzetemredemir/strapi-ethwallet-custom-field-/assets/11755605/be22b232-1deb-4b7e-9057-23dcb0abf43e)

## What it does

- Adds a menu link with a puzzle icon to the Strapi admin panel, opening the plugin's page.
- On that page, takes an Ethereum address and calls the Etherscan `account/balance` API, then shows the returned balance in wei.
- Keeps the Strapi plugin scaffold on the server side (sample route, controller and service that return a welcome message), compiled from `server/` into `dist/`.

**Not implemented:** the custom field itself. The plugin does not register a custom field with Strapi, so no Ethereum address field type appears in the Content-Type Builder and no address validation happens. The Etherscan API key in `admin/src/pages/HomePage/index.tsx` is the placeholder `YOUR_API_KEY`, so the balance lookup needs a real key.

## Tech stack

- Strapi v4 plugin API (`@strapi/helper-plugin`, `@strapi/icons`)
- TypeScript
- React 18, react-router-dom 5
- axios, Etherscan API

## Running it locally

Requires Node.js 18 to 20. Build the server code first, since `strapi-server.js` loads it from `dist/`:

```bash
npm install
npm run build
```

Then add the folder to a Strapi v4 project as a local plugin. The release published on npm (`strapi-ethwallet-custom-field` 1.0.3) ships without `dist/`, so it cannot load as installed.

## License

MIT, see [LICENSE](LICENSE).
