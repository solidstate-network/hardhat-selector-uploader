import { uploadSelectors } from '../logic.js';
import type { NewTaskActionFunction } from 'hardhat/types/tasks';

interface UploadSelectorsActionArguments {
  noCompile: boolean;
}

const action: NewTaskActionFunction<UploadSelectorsActionArguments> = async (
  args,
  hre,
) => {
  if (hre.globalOptions.noUploadSelectors) return;

  if (!args.noCompile) {
    hre.globalOptions.noUploadSelectors = true;
    await hre.tasks.getTask('compile').run();
  }

  await uploadSelectors(hre);
};

export default action;
