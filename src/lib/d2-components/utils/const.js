import { fromPairs } from 'lodash-es'

export const nameSpace = 'd2'

export const colorNames = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink']

export const spaceSizeNames = ['mini', 'base', 'small', 'large']

export const buttonSizeNames = ['mini', 'small', 'large']

export const buttonTypes = ['button', 'submit', 'reset']

export const flexProps = {
  dir: ['top', 'right', 'bottom', 'left'],
  main: ['right', 'left', 'justify', 'center'],
  cross: ['top', 'bottom', 'baseline', 'center', 'stretch'],
  box: ['mean', 'first', 'last', 'justify'],
  content: ['start', 'end', 'center', 'between', 'around', 'stretch'],
  self: ['auto', 'top', 'bottom', 'baseline', 'center', 'stretch']
}

export const breakPointNames = ['sm', 'md', 'lg', 'xl', '2xl']

export const breakPointsMinWidth = [640, 768, 1024, 1280, 1536]

export const  breakPoints = fromPairs(
  breakPointNames.map((name, index) => [
    name,
    breakPointsMinWidth[index]
  ])
)
