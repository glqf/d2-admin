// ---------- Surely Vue ----------
// [website]  https://www.surely.cool
// [purchase] https://www.surely.cool/pricing

// 声明
// 1. 去除水印的方法仅支持在开发阶段使用
// 2. 建议联系 Surely Vue 客服获取用于开发环境的临时激活码
// 3. 如果您自行选择在已经上线的项目中使用本项目中的方法去除水印造成的一切后果只能您自行承担
// 4. D2Admin (https://github.com/d2-projects/d2-admin) 没有在任何生产环境下使用此方法隐藏水印

// Statement
// 1. The method of removing watermark is only supported in the development stage
// 2. It is recommended that you contact surely Vue's guest salesperson to obtain a temporary activation code for use in the development environment
// 3. If you choose to use the method in this project to remove the watermark in the online project, you can only bear all the consequences
// 4. D2Admin (https://github.com/d2-projects/d2-admin) does not use this method to hide watermarks in any production environment

export function hideSurelyVueTableWatermark () {
  if (import.meta.env.PROD || location.hostname !== 'localhost') return
  clean(
    'div.surely-table > div',
    ['Unlicensed Product', 'Invalid License']
  )
  clean(
    'div.surely-table > div.surely-table-body > div',
    ['Powered by Surely Vue']
  )
}

function clean (selector, text) {
  document.querySelectorAll(selector).forEach(e => text.includes(e.innerHTML) && (e.innerHTML = ''))
}
