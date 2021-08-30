import { openBlock, createBlock, Comment } from 'vue'
import { PatchFlags } from 'd2-projects/d2-utils/vnode.js'

export function renderArrow (showArrow) {
  return showArrow
    ? (openBlock(),
    createBlock(
      'div',
      {
        ref: 'arrowRef',
        class: 'd2-popper__arrow',
        'data-popper-arrow': '',
      },
      null,
      PatchFlags.NEED_PATCH,
    ))
    : (openBlock(), createBlock(Comment, null, ''))
}
