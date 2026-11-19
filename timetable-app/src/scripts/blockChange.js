//& =============
//* Modules
import { BLOCK_SUBJECTS } from "./core/constants.js";

export function blockChange(block) {
  let subject = BLOCK_SUBJECTS[block];

  console.log(subject)

  return subject
}