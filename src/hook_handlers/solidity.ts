import { uploadSelectors } from '../logic.js';
import type { SolidityHooks } from 'hardhat/types/hooks';

export default async (): Promise<Partial<SolidityHooks>> => ({
  onCleanUpArtifacts: async (context, artifactPaths, next) => {
    // TODO: skip if running on CI server
    if (
      context.config.fourByteUploader.runOnCompile &&
      !context.globalOptions.noUploadSelectors
    ) {
      await uploadSelectors(context);
    }

    return next(context, artifactPaths);
  },
});
