#react-webpack-core

### Overview
Extremely mimimal app demonstrating:
* Webpack JS Bundling
* Webpack LESS Compilation
* Webpack CSS/LESS Require Syntax
* React Server Component Rendering
* React Browser Data Fetching

**Note:** There really isn't much to see in the browser for this example, just some blue text saying "Hello Kevin" which is hardcoded server side data.

### To Run:

`npm install`

`npm start`

### Notable URLs

**http://localhost:8080/** - React component rendered server side and delivered with Express.

**http://localhost:8080/Base.html** - React component rendered client side from raw html that fetches its own data lazily.

**http://localhost:8080/api/base** - Data endpoint
