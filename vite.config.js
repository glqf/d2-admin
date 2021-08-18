import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

import { visualizer } from 'rollup-plugin-visualizer'

// https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx
import Jsx from '@vitejs/plugin-vue-jsx'

// https://github.com/nekocode/antd-dayjs-vite-plugin
import AntdDayjs from 'antd-dayjs-vite-plugin'

// https://github.com/antfu/vite-plugin-components
import Components, { AntDesignVueResolver } from 'vite-plugin-components'

// https://github.com/hannoeru/vite-plugin-pages
import Pages from 'vite-plugin-pages'

// https://github.com/anncwb/vite-plugin-svg-icons
import SvgIcons from 'vite-plugin-svg-icons'

// https://github.com/antfu/purge-icons
import PurgeIcons from 'vite-plugin-purge-icons'

export default defineConfig({
  plugins: [
    Vue(),
    Jsx(),
    Components({
      customComponentResolvers: [
        AntDesignVueResolver()
      ]
    }),
    Pages({
      pagesDir: 'src/views',
      exclude: [
        '**/components/*.vue'
      ],
      extensions: ['vue', 'jsx']
    }),
    AntdDayjs({
      preset: 'antdv3'
    }),
    visualizer({
      open: true
    }),
    PurgeIcons(),
    SvgIcons({
      iconDirs: [
        path.resolve(process.cwd(), 'src/assets/svg/icon')
      ]
    })
  ],
  resolve: {
    alias: {
      '@': '/src',
      'd2-utils': '/src/libs/d2-utils',
      'd2-components': '/src/libs/d2-components',
      'd2-modern-normalize': '/src/libs/d2-modern-normalize'
    }
  },
  server: {
    open: true
  },
  build: {
    sourcemap: true
  }
})
