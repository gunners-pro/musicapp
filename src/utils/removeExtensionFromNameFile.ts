function removeExtensionFromNameFile(filename: string) {
  const str = filename.slice(0, -4);
  return str;
}

export { removeExtensionFromNameFile };
