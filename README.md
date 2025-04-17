# Hardhat Selector Uploader

Calculate the function selectors found in all local contracts and upload them to the [4byte Directory](https://www.4byte.directory/) Ethereum Signature Database.

> Versions of this plugin prior to `2.0.0` were released as `@solidstate/hardhat-4byte-uploader`.

## Installation

```bash
npm install --save-dev @solidstate/hardhat-selector-uploader
# or
yarn add --dev @solidstate/hardhat-selector-uploader
```

## Usage

Load plugin in Hardhat config:

```javascript
import HardhatSelectorUploader from '@solidstate/hardhat-selector-uploader';

const config: HardhatUserConfig = {
  plugins: [
    HardhatSelectorUploader,
  ],
  selectorUploader: {
    ... // see table for configuration options
  },
};
```

Add configuration under the `selectorUploader` key:

| option         | description                                                                                                       | default |
| -------------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| `runOnCompile` | whether to automatically upload selectors during compilation (ignored if Hardhat detects a CI server environment) | `false` |

```javascript
selectorUploader: {
  runOnCompile: true,
}
```

Run the included Hardhat task manually:

```bash
npx hardhat upload-selectors
# or
yarn run hardhat upload-selectors
```

## Development

Install dependencies via Yarn:

```bash
yarn install
```

Setup Husky to format code on commit:

```bash
yarn prepare
```
