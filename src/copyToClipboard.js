/* Copy text to the clipboard if you click it and it's 
in a DOM element with the '.copyToClipboard' class. */
export function copyToClipboard(e) {
  const clickedItem = e.target;

  if (!clickedItem || !clickedItem.classList) {
    return;
  }

  const containsClass = clickedItem.classList.contains('copyToClipboard');

  if (!containsClass) {
    return;
  }

  const text = clickedItem.innerText;

  if (!text) {
    return;
  }

  const el = document.createElement('textarea');
  el.value = text;
  el.style.position = 'absolute';
  el.style.top = '-999em';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  console.log('"' + text + '" copied to the clipboard.');
}

export function addCopyToClipboardHoverText() {
  const itemsWithClass = document.getElementsByClassName('copyToClipboard');

  if (itemsWithClass) {
    for (const i in itemsWithClass) {
      const item = itemsWithClass[i];

      if (item.getAttribute && !item.getAttribute('title')) {
        item.setAttribute('title', 'click to copy to clipboard');
      }
    }
  }
}
