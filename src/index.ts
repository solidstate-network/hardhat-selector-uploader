import pkg from '../package.json';
import taskUploadSelectors from './tasks/upload_selectors.js';
import './type-extensions.js';
import { globalOption } from 'hardhat/config';
import { ArgumentType } from 'hardhat/types/arguments';
import type { HardhatPlugin } from 'hardhat/types/plugins';

const plugin: HardhatPlugin = {
  id: pkg.name!,
  npmPackage: pkg.name!,
  tasks: [taskUploadSelectors],
  hookHandlers: {
    config: import.meta.resolve('./hook_handlers/config.js'),
    solidity: import.meta.resolve('./hook_handlers/solidity.js'),
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
