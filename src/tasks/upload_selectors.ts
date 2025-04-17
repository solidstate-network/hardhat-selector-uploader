import { task } from 'hardhat/config';

export default task('upload-selectors')
  .setDescription(
    'Upload local function selectors to the Ethereum Selector Database',
  )
  .addFlag({
    name: 'noCompile',
    description: "Don't compile before running this task",
  })
  .setAction(import.meta.resolve('../actions/upload_selectors.js'))
  .build();
