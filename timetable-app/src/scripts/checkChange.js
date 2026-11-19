export function saveBlockSubjects(onSave) {
  const subjects = {};

  for (let blockNumber = 1; blockNumber <= 7; blockNumber += 1) {
    const input = document.getElementById(`block${blockNumber}_textInput`);
    subjects[`BLOCK-${blockNumber}`] = input.value;
  }

  onSave(subjects);

  document.getElementById("editOverlay").style.display = "none";
}