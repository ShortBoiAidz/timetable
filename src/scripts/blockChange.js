//& =============
//* Modules
import { BLOCK_SUBJECTS } from "./core/constants.js";

export function blockChange(block) {
  let subject = BLOCK_SUBJECTS[block];
  let classroom = BLOCK_SUBJECTS[block];

  console.log(subject, classroom)

  return subject, classroom
}