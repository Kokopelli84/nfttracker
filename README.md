# Nifty Tracker

Created as part of Codework's senior curriculum, Nifty Tracker is an app that allows users to sell,
track and lazy mint NFT's. This is a fork of [brandond98](https://github.com/brandond98)'s
[Nifty Tracker](https://github.com/brandond98/nfttracker).

## Changes

Major changes in this fork include:

- Complete refactoring to Typescript
- Testing
- Linting
- Precommit hooks
- Conventional commits
- More modular React components

## Techstack

| Name               |           Description           |
| :----------------- | :-----------------------------: |
| Moralis            |            Web3 SDK             |
| Metamask           |         Authentication          |
| Redux              |            App store            |
| Husky              |        Enables git hooks        |
| Lint-staged        |    Run tasks on staged files    |
| Jest/React-testing |         Testing library         |
| Opensea API        | Used to fetch addition NFT info |

## Project Structure

| Folder           |             Description             |
| :--------------- | :---------------------------------: |
| `src/pages`      |            Nextjs routes            |
| `src/components` |          React components           |
| `src/helpers`    |        App helper functions         |
| `src/services`   |             Api client              |
| `src/state`      |             Redux store             |
| `src/styles`     |           App css styles            |
| `src/__tests__`  | Testing with Jest/React-testing lib |
| `src/ts`         |          Typescript types           |

## Development Guide

To set up a development environment you need to have [MetaMask](https://metamask.io/) chrome
extension installed.

To set up the [Moralis SDK](https://moralis.io/), you'll need a running Moralis server. Follow these
steps to create one and set up the environment variables:

1. Create a [Moralis account](https://admin.moralis.io/register)
2. Once in the dashboard, create a server in the `Mainnet`
3. Select the `Eth blockchain (Mainnet)`
4. Once the server is created, view your server details to get the access credentials
5. Create a `.env.local` in the root of this project and add the following environment variables:
   - `NEXT_PUBLIC_APP_ID=your Moralis Application Id`
   - `NEXT_PUBLIC_SERVER_URL=your Moralis Server Url`
6. Install the following Moralis [plugins](https://moralis.io/plugins/)
   - Rarible NFT Tools
   - OpenSea – Buy and Sell NFTs

To start the development environment follow these steps:

1. install the dependencias, run `npm install` in the root of the project.
2. Start the development server by running `npm run dev`.

## Contributing

This project is using the
[conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) standard. Please
follow these steps to ensure your commit messages are standardized:

1. Make sure your shell path is in the root of the project (not inside any of the packages).
2. Run `npm install`.
3. Stage the files you are committing with `git add [files]`.
4. Run `npm run commit`. This will start an interactive prompt that generates your commit message:
   1. Select the type of change.
   2. Type the scope. This is either `global` for project-wide changes or one of the packages
      (kibbeh, shawarma etc.).
   3. Write a short, imperative tense description of the change.
   4. If the above was not sufficient, you may now write a longer description of your change
      (otherwise press enter to leave blank).
   5. y or n for whether there are any breaking changes (e.g. changing the props of a component,
      changing the JSON structure of an API response).
   6. y or n for whether this change affects an open issue, if positive you will be prompted to
      enter the issue number.
5. Your staged files will be checked for types, linting and format errors and the test suite will
   run. If one of these tasks fail, please review your code before trying to commit again.
6. Your commit message has now been created, you may push to your fork and open a pull request
