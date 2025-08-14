import type { SelectorUploaderConfig } from '../types.js';
import type { ConfigHooks } from 'hardhat/types/hooks';

const DEFAULT_CONFIG: SelectorUploaderConfig = {
  runOnCompile: false,
};

export default async (): Promise<Partial<ConfigHooks>> => ({
  resolveUserConfig: async (userConfig, resolveConfigurationVariable, next) => {
    const resolvedConfig = await next(userConfig, resolveConfigurationVariable);

    const selectorUploader = {
      ...DEFAULT_CONFIG,
      ...userConfig.selectorUploader,
    };

    return {
      ...resolvedConfig,
      selectorUploader,
    };
  },
});
