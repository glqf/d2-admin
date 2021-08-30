import { Fragment, Text, Comment } from 'vue'

const TEMPLATE = 'template'

export const isFragment = node => node.type === Fragment

export const isText = node => node.type === Text

export const isComment = node => node.type === Comment

export const isTemplate = node => node.type === TEMPLATE

export const patchFlags = {
  TEXT: 1,
  CLASS: 2,
  STYLE: 4,
  PROPS: 8,
  FULL_PROPS: 16,
  HYDRATE_EVENTS: 32,
  STABLE_FRAGMENT: 64,
  KEYED_FRAGMENT: 128,
  UNKEYED_FRAGMENT: 256,
  NEED_PATCH: 512,
  DYNAMIC_SLOTS: 1024,
  HOISTED: -1,
  BAIL: -2
}

export function getChildren (node, depth) {
  if (isComment(node)) return
  if (isFragment(node) || isTemplate(node)) {
    return depth > 0
      ? getFirstValidNode(node.children, depth - 1)
      : undefined
  }
  return node
}

export function getFirstValidNode (nodes, maxDepth = 3,) {
  if (Array.isArray(nodes)) {
    return getChildren(nodes[0], maxDepth)
  } else {
    return getChildren(nodes, maxDepth)
  }
}
