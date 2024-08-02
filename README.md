**Description:**
Porpuse of this project is setting up the Playwright and its infrastructure.



**Prerequisites:**

- Node.js and npm (or yarn) installed
- Playwright installed: `npm install playwright`


**Installation:**

1. Clone the repository
2. Navigate to project directory: `cd playwright-project`
3. Install dependencies: `npm install`

**Commands:**
After installation complete, start testing using one of the following commands:

1. Run tests in interactive UI mode, with a built-in watch mode : `npm run ui`
2. Run tests in headed browsers : `npm run headed`
3. Run in debug mode with Playwright Inspector: `npm run debug`
4. See your test result with following command : `npm run test-result`


**Project Structure:**

```
playwright-project/
├── package.json
├── tests/
│   ├── pages/
│   │   ├── pom/
│   │   │   ├── pricePages.js
│   │   │   └── ...
│   │   └── testDate
│   │   ├── pricePage/
│   │   │   ├──price.spec.ts
│   │   └── ...
├── .gitignore
└── README.md
```

### Husky, ESLint, and Prettier

We use a mix of [Husky](https://github.com/typicode/husky), [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) within our repository to help enforce consistent coding practices. Husky is a tool that will install a pre-commit hook to run the linter any time before you attempt to make a commit. This replaces the old pre-commit hook that was used before. to install the pre-commit hook you will need to run
