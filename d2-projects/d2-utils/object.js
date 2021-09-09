import { camelCase, mapKeys } from 'lodash-es'

export const keyPrefix = (source, prefix) => mapKeys(source, (_, key) => camelCase(`${prefix}-${key}`))
