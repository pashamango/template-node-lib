# template-node-lib

Fleet template: Node.js library / service. Created via **Use this template**.

**When instantiating:** rename the package in `package.json`, rewrite this README,
replace the placeholder in `.well-known/agent-card.json`.

## Purpose

_One paragraph: what this library/service does and why it exists._

## Install

```sh
npm install
```

## Usage

```js
import { hello } from './src/index.js';
console.log(hello('fleet'));
```

## Scripts

- `npm test` — run tests (`node --test`, zero dependencies)
- `npm start` — run the service entrypoint

## Layout

```
src/        library / service code
test/       node:test suites
.well-known/agent-card.json   agent-readable repo card
```

## Secrets

Never commit secrets. Copy `.env.example` to `.env` (git-ignored). Required
variables are listed there.

## License

MIT — see [LICENSE](LICENSE).
