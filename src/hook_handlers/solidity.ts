import { uploadSelectors } from '../lib/four_byte_uploader.js';
import { isCi } from '@nomicfoundation/hardhat-utils/ci';
import type { SolidityHooks } from 'hardhat/types/hooks';

export default async (): Promise<Partial<SolidityHooks>> => ({
  onCleanUpArtifacts: async (context, artifactPaths, next) => {
    if (
      context.config.fourByteUploader.runOnCompile &&
      !context.globalOptions.noUploadSelectors &&
      !isCi()
    ) {
      await uploadSelectors(context);
    }

    return next(context, artifactPaths);
  },
});
