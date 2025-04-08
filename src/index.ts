import './tasks/compile';
import './tasks/upload_selectors';
import './type-extensions.js';
import { extendConfig } from 'hardhat/config';

extendConfig((config, userConfig) => {
  config.fourByteUploader = Object.assign(
    { runOnCompile: false },
    userConfig.fourByteUploader,
  );
});
