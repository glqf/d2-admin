import {
  Fragment,
  Text,
  Comment
} from 'vue'

const TEMPLATE = 'template'

export const isFragment = (node) => node.type === Fragment

export const isText = (node) => node.type === Text

export const isComment = (node) => node.type === Comment

export const isTemplate = (node) => node.type === TEMPLATE

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
