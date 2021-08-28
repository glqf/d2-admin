export const popperPropsDefault = {
  visible: { type: Boolean, default: undefined },
  disabled: { type: Boolean },
  manualMode: { type: Boolean },
  appendToBody: { type: Boolean, default: true },
  autoClose: { type: Number, default: 0 },
  showAfter: { type: Number, default: 0 },
  hideAfter: { type: Number, default: 0 },
  trigger: { type: [String, Array], default: 'hover' } // click | focus | hover | manual
}
