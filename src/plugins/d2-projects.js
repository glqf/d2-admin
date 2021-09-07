import config from 'd2-projects/d2-config/index.js'
import icon from 'd2-projects/d2-icon/index.js'

import 'd2-projects/d2-icon/src/icon.scss'

export default function (app) {
  app
    .use(config)
    .use(icon)
}
