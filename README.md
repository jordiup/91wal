# 91Wal - A banking portal for our sharehouse :)

This is a simple project that shows the usage of Next.js, integrated with Up's banking API.

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

---

## Deploy your own

If you're someone that want's to have a play around with deploying your own version of the app, you can do so with the Vercel Details below.

Deploy the example using [Vercel](https://vercel.com/new/git/external?repository-url=https://github.com/jordiup/91wal):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-typescript&project-name=with-typescript&repository-name=with-typescript)
