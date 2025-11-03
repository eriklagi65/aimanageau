if (password !== "admin123") {
  e.preventDefault();
  openErrorModal();
  return;
}
