import pkg from '../package.json';
import './tasks/compile';
import './tasks/upload_selectors';
import './type-extensions.js';
import { globalOption, task } from 'hardhat/config';
import { ArgumentType } from 'hardhat/types/arguments';
import type { HardhatPlugin } from 'hardhat/types/plugins';

const plugin: HardhatPlugin = {
  id: pkg.name.split('/').pop()!,
  npmPackage: pkg.name!,
  // tasks: [],
  hookHandlers: {
    config: import.meta.resolve('./hook_handlers/config.js'),
    // solidity: import.meta.resolve('./hook_handlers/solidity.js'),
  },
  globalOptions: [
    globalOption({
      name: 'noUploadSelectors',
      description: 'Disables selector uploading',
      defaultValue: false,
      type: ArgumentType.BOOLEAN,
    }),
  ],
};

export default plugin;
