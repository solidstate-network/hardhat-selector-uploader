import { uploadSelectors } from '../lib/selector_uploader.js';
import { isCi } from '@nomicfoundation/hardhat-utils/ci';
import type { SolidityHooks } from 'hardhat/types/hooks';

export default async (): Promise<Partial<SolidityHooks>> => ({
  processArtifactsAfterSuccessfulBuild: async (
    context,
    artifactPaths,
    buildRootFilePaths,
    buildOptions,
  ) => {
    if (
      context.config.selectorUploader.runOnCompile &&
      !context.globalOptions.noUploadSelectors &&
      !isCi()
    ) {
      await uploadSelectors(context);
    }
  },
});
