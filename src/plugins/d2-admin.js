import 'd2-projects/d2-normalize/index.css'

import D2BreakPoint from 'd2-projects/d2-break-point/index.js'

import D2Config from 'd2-projects/d2-config/index.js'

import D2Scroll from 'd2-projects/d2-scroll/index.js'

import D2Flex from 'd2-projects/d2-flex/index.js'
import 'd2-projects/d2-flex/src/flex.scss'

import D2Icon from 'd2-projects/d2-icon/index.js'
import 'd2-projects/d2-icon/src/icon.scss'

import D2Svg from 'd2-projects/d2-svg/index.js'

export default {
  install (app) {
    app
      .use(D2BreakPoint)
      .use(D2Config)
      .use(D2Scroll)
      .use(D2Flex)
      .use(D2Icon)
      .use(D2Svg)
  }
}
