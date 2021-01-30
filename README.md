# [91Wal - A banking portal for our sharehouse :)](https://91wal.now.sh/)

This is a [simple project](https://91wal.now.sh/) that shows the usage of Next.js, integrated with Up's banking API.

We currently have no visibility over our Sharehouse financials 🙃, so we decided to make a website using [Up's API](https://developer.up.com.au/) to visualise our transactions, balance etc. 🤠

---

## Setup instructions

1. We're using `yarn` on this project, make sure you have it installed
2. Run `yarn` to download all the dependencies
3. Copy the contents of `.env.template` into a new file named `.env.local` at the root of the project. This contains our API Key, and must be kept secret. Replace the templated values with the secrets by asking @jordiup.
4. Run `yarn dev` to spin up the Next.JS react server
5. Go to http://localhost:3000 🤠

When running `next dev`, Next.js will start looking for any `.ts` or `.tsx` files in our project and builds it. It even automatically creates a `tsconfig.json` file for our project with the recommended settings.

Next.js has built-in TypeScript declarations, so we'll get autocompletion for Next.js' modules straight away.

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.

## Architecture Decisions

- [Chakra UI](https://chakra-ui.com/) - We're using Chakra for our React/FE UI framework. Check out the docs for more info.

### Folder Structure/Notes

├── components # Add all react components here
│   ├── Accounts.tsx  
│   ├── Layout.tsx  
│   ├── List.tsx  
│   ├── ListDetail.tsx
│   └── ListItem.tsx
├── interfaces
│   └── index.ts
├── next-env.d.ts
├── next.config.js
├── .env.template # Copy env template here
├── .env.local # Create and add the secretes here
├── package.json
├── pages
│   ├── \_app.tsx # Root page that provides things like layout to all other pages
│   ├── api # API directory
│   │   ├── accounts.ts # Accounts api end point https://localhost:300/api/accounts
│   │   └── transactions.ts # Transactions api end point
│   └── index.tsx
├── tsconfig.json
├── utils # Random utils
│   ├── api.ts # An exported Object for OpenAPIClientAxios
│   ├── apiHooks.ts # All api definitions that are called from the FE and linked into the BE
│   ├── openapi.json # Taken from up's official docs: https://raw.githubusercontent.com/up-banking/api/master/v1/openapi.json
│ │ # (do not modify)
│   ├── \_up-api-types.ts # (deprecated) an autogen'd file
│   └── up-client.d.ts # an autogen'd file used by the BE to speak to Up's API

---

## Deploy your own

If you're someone that want's to have a play around with deploying your own version of the app, you can do so with the Vercel Details below.

Deploy the example using [Vercel](https://vercel.com/new/git/external?repository-url=https://github.com/jordiup/91wal):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-typescript&project-name=with-typescript&repository-name=with-typescript)
