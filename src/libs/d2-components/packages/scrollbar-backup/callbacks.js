import { kebabCase } from 'lodash-es'

export const osCallbacks = [
  'onInitialized',
  'onInitializationWithdrawn',
  'onDestroyed',
  'onScrollStart',
  'onScroll',
  'onScrollStop',
  'onOverflowChanged',
  'onOverflowAmountChanged',
  'onDirectionChanged',
  'onContentSizeChanged',
  'onHostSizeChanged',
  'onUpdated'
]

export const callbacksEmits = osCallbacks.map(name => kebabCase(name.replace(/^on/, '')))
