export function changeColours(theme) {
  const rootStyles = document.documentElement.style;
  rootStyles.setProperty("--radialGradient", `radial-gradient(${theme.backgroundStart}, ${theme.backgroundEnd})`);
  rootStyles.setProperty("--linearGradient", `linear-gradient(145deg, ${theme.buttonStart}, ${theme.buttonEnd})`);
  rootStyles.setProperty("--buttonBorder", theme.buttonBorder);
  rootStyles.setProperty("--overlayGradient", `radial-gradient(${theme.overlayStart}, ${theme.overlayEnd})`);
  rootStyles.setProperty("--border", `2px solid ${theme.borderColor}`);
}