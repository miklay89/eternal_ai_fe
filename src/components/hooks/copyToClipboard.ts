export async function copyTextToClipboard(text: string) {
  if ("clipboard" in navigator) {
    await navigator.clipboard.writeText(text);
    alert("Copied to clipboard.");
    return;
  } else {
    document.execCommand("copy", true, text);
    alert("Copied to clipboard.");
    return;
  }
}
