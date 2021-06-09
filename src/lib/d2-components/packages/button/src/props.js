import {
  isValidColor,
  isValidSize,
  isValidButtonTypes,
  isBoolean,
  isIntegerAndBetween
} from '../../../utils/is.js'

export default {
  icon: { type: String, default: '' },
  iconRight: { type: String, default: '' },
  color: { type: String, default: '', validator: value => !value || isValidColor(value) },
  size: { type: String, default: '', validator: value => !value || isValidSize(value) },
  type: { type: String, default: 'button', validator: value => isValidButtonTypes(value)},
  autofocus: { type: Boolean, default: false },
  text: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  loadingRight: { type: Boolean, default: false },
  plain: { type: Boolean, default: false },
  round: { type: Boolean, default: false },
  roundLeft: { type: Boolean, default: false },
  roundRight: { type: Boolean, default: false },
  circle: { type: Boolean, default: false },
  ring: { type: Boolean, default: false },
  ringOffset: { type: [Boolean, Number], default: false, validator: value => isBoolean(value) || isIntegerAndBetween(value, 0, 4) },
  ringWidth: { type: Number, default: 2 }
}