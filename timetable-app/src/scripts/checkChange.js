export function saveBlockSubjects(onSave) {
  const subjects = {};
  const colors = {};

  for (let blockNumber = 1; blockNumber <= 7; blockNumber++) {
    const input = document.getElementById(`block${blockNumber}_textInput`);
    const colorInput = document.getElementById(`block${blockNumber}_colourPicker`);
    subjects[`BLOCK-${blockNumber}`] = input.value;
    colors[`BLOCK-${blockNumber}`] = colorInput.value;
  }

  onSave({ subjects, colors });

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