export function hideSurelyTableWatermark () {
  if (location.hostname !== 'localhost') return
  document.querySelectorAll('div.surely-table > div.surely-table-body > div')
    .forEach(e => e.innerHTML === 'Powered by Surely Vue' && (e.innerHTML = ''))
  document.querySelectorAll('div.surely-table > div')
    .forEach(e => ['Unlicensed Product', 'Invalid License'].includes(e.innerHTML) && (e.innerHTML = ''))
}
