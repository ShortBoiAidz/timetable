import {
  BLOCK_1,
  BLOCK_2,
  BLOCK_3,
  BLOCK_4,
  BLOCK_5,
  BLOCK_6,
  BLOCK_7,
  BLOCK_SUBJECTS
 } from "./core/constants.js";

export function checkBlock(cellId, subjects = BLOCK_SUBJECTS) {
  if (BLOCK_1.includes(cellId)) return subjects["BLOCK-1"];
  if (BLOCK_2.includes(cellId)) return subjects["BLOCK-2"];
  if (BLOCK_3.includes(cellId)) return subjects["BLOCK-3"];
  if (BLOCK_4.includes(cellId)) return subjects["BLOCK-4"];
  if (BLOCK_5.includes(cellId)) return subjects["BLOCK-5"];
  if (BLOCK_6.includes(cellId)) return subjects["BLOCK-6"];
  if (BLOCK_7.includes(cellId)) return subjects["BLOCK-7"];

  return "";
}