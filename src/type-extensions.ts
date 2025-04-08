import { FourByteUploaderConfig, FourByteUploaderUserConfig } from './types.js';

declare module 'hardhat/types/config' {
  export interface HardhatConfig {
    fourByteUploader: FourByteUploaderConfig;
  }

  export interface HardhatUserConfig {
    fourByteUploader?: FourByteUploaderUserConfig;
  }
}
