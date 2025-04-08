import type { FourByteUploaderConfig } from '../types.js';
import type { ConfigHooks } from 'hardhat/types/hooks';

const DEFAULT_CONFIG: FourByteUploaderConfig = {
  runOnCompile: false,
};

export default async (): Promise<Partial<ConfigHooks>> => ({
  resolveUserConfig: async (userConfig, resolveConfigurationVariable, next) => {
    const resolvedConfig = await next(userConfig, resolveConfigurationVariable);

    const fourByteUploader = {
      ...DEFAULT_CONFIG,
      ...userConfig.fourByteUploader,
    };

    return {
      ...resolvedConfig,
      fourByteUploader,
    };
  },
});
