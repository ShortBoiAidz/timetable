import {
  BLOCK_1,
  BLOCK_2,
  BLOCK_3,
  BLOCK_4,
  BLOCK_5,
  BLOCK_6,
  BLOCK_7,
  BLOCK_SUBJECTS,
  BLOCK_CLASSES
 } from "./core/constants.js";

function getBlockDetails(block, blockCells, cellId, subjects, classes) {
  const classroomValue = classes[block];
  const classrooms = Array.isArray(classroomValue)
    ? classroomValue
    : String(classroomValue || "")
        .split(",")
        .map((classroom) => classroom.trim())
        .filter(Boolean);
  const occurrence = blockCells.indexOf(cellId);

  return {
    subject: subjects[block] || "",
    classroom: classrooms.length > 0 ? classrooms[occurrence % classrooms.length] : "",
  };
}

export function checkBlock(cellId, subjects = BLOCK_SUBJECTS, classes = BLOCK_CLASSES) {
  const blocks = [
    ["BLOCK-1", BLOCK_1],
    ["BLOCK-2", BLOCK_2],
    ["BLOCK-3", BLOCK_3],
    ["BLOCK-4", BLOCK_4],
    ["BLOCK-5", BLOCK_5],
    ["BLOCK-6", BLOCK_6],
    ["BLOCK-7", BLOCK_7],
  ];

  for (const [block, blockCells] of blocks) {
    if (blockCells.includes(cellId)) {
      return getBlockDetails(block, blockCells, cellId, subjects, classes);
    }
  }

  return { subject: "", classroom: "" };
}