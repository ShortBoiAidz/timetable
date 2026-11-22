export function changeColours(theme) {
  const rootStyles = document.documentElement.style;
  const radialGradient = `radial-gradient(${theme.backgroundStart}, ${theme.backgroundEnd})`;
  const linearGradient = `linear-gradient(145deg, ${theme.buttonStart}, ${theme.buttonEnd})`;
  const overlayGradient = `radial-gradient(${theme.overlayStart}, ${theme.overlayEnd})`;
  const border = `2px solid ${theme.borderColor}`;

  rootStyles.setProperty("--radialGradient", radialGradient);
  rootStyles.setProperty("--linearGradient", linearGradient);
  rootStyles.setProperty("--buttonBorder", theme.buttonBorder);
  rootStyles.setProperty("--overlayGradient", overlayGradient);
  rootStyles.setProperty("--border", border);

  localStorage.setItem("--radialGradient", radialGradient);
  localStorage.setItem("--linearGradient", linearGradient);
  localStorage.setItem("--buttonBorder", theme.buttonBorder);
  localStorage.setItem("--overlayGradient", overlayGradient);
  localStorage.setItem("--border", border);
}