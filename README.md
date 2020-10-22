<p align="center">
  <h1>🛠 RDK - Component ToolKit</h1>
  <a href="https://github.com/reaviz/rdk/workflows/build/">
    <img src="https://github.com/reaviz/rdk/workflows/build/badge.svg?branch=master" />
  </a>
  <a href="https://npm.im/rdk">
    <img src="https://img.shields.io/npm/v/rdk.svg" />
  </a>
  <a href="https://npm.im/rdk">
    <img src="https://badgen.net/npm/dw/rdk" />
  </a>
  <a href="https://github.com/reaviz/rdk/blob/master/LICENSE">
    <img src="https://badgen.now.sh/badge/license/apache2" />
  </a>
  <a href="https://bundlephobia.com/result?p=rdk">
    <img src="https://badgen.net/bundlephobia/minzip/rdk">
  </a>
</p>

---

RDK is a set of low-level tools that implement common interactions found in
component libraries. The tooling abstracts the visual
presentation so the tools can be used with any visual presentation.

## 🚀 Quick Links
- Checkout the [demos and docs](https://reaviz.github.io/rdk/)
- Explore the library on [Chroma](https://www.chromatic.com/library?appId=5eb06076aebb8f00227a5659)

## ✨ Features

- Overlay - Provides a way to open floating panels on the screen
- Exit Listener - Provides a easy way to listen for exit events such as clicks and escape keypress.
- Portal - Provides a flexible system for rendering dynamic content into an application
- Position - Provides a flexible system for placing panels related to other elements
- Backdrop - Blocker element overlay
- Id - A unique ID hook

## 📦 Install

To use RDK in your project, install it via npm/yarn:

```
yarn add rdk
```

#### Development Builds
Our continuous integration server runs all tests on every commit to master and
if they pass it will publish a new development build to NPM and tag it with the `@dev` tag.
This means that if you want the bleeding edge of `rdk` you can simply do:

```bash
yarn add rdk@dev
```

This will install the version currently tagged as `@dev`. Your `package.json` file will be
locked to that specific version.

```js
{
  "dependencies": {
    "rdk": "3.0.0-dev-master.a0d076d"
  }
}
```

Visit the [demos page](https://reaviz.github.io/rdk/) to learn more!

## 🔭 Development

If you want to run RDK locally, its super easy!

- Clone the repo
- `yarn install`
- `yarn start`
- Browser opens to Storybook page
