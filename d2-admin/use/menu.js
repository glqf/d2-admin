export function useMenu () {
  function onMenuSelect (id) {
    console.log(id)
  }

  return {
    onMenuSelect
  }
}
