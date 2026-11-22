export function saveBlockSubjects(onSave) {
  const subjects = {};
  const colors = {};
  const classes = {};

  for (let blockNumber = 1; blockNumber <= 7; blockNumber++) {
    const input = document.getElementById(`block${blockNumber}_textInput`);
    const colorInput = document.getElementById(`block${blockNumber}_colourPicker`);
    const classInput = document.getElementById(`block${blockNumber}_classInput`);
    subjects[`BLOCK-${blockNumber}`] = input.value;
    colors[`BLOCK-${blockNumber}`] = colorInput.value;
    classes[`BLOCK-${blockNumber}`] = classInput.value
      .split(",")
      .map((classroom) => classroom.trim())
      .filter(Boolean);
  }

  onSave({ subjects, colors, classes });

  document.getElementById("editOverlay").style.display = "none";
}

export function saveSettings(onSave) {
  const settings = {
    backgroundStart: document.getElementById("backgroundStart").value,
    backgroundEnd: document.getElementById("backgroundEnd").value,
    buttonStart: document.getElementById("buttonStart").value,
    buttonEnd: document.getElementById("buttonEnd").value,
    buttonBorder: document.getElementById("buttonBorder").value,
    overlayStart: document.getElementById("overlayStart").value,
    overlayEnd: document.getElementById("overlayEnd").value,
    borderColor: document.getElementById("borderColor").value,
    headerColor: document.getElementById("headerColor").value,
  };

  onSave(settings);
  document.getElementById("settingsOverlay").style.display = "none";
}