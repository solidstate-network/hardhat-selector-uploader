import { TASK_UPLOAD_SELECTORS } from '../task_names.js';
import { task } from 'hardhat/config';

export default task(TASK_UPLOAD_SELECTORS)
  .setDescription(
    'Upload local function selectors to the Ethereum Selector Database',
  )
  .addFlag({
    name: 'noCompile',
    description: "Don't compile before running this task",
  })
  .setAction(import.meta.resolve('../actions/upload_selectors.js'))
  .build();
