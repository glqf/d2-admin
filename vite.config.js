import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

import { visualizer } from 'rollup-plugin-visualizer'

// https://github.com/nekocode/antd-dayjs-vite-plugin
import AntdDayjs from 'antd-dayjs-vite-plugin'

// https://github.com/antfu/vite-plugin-components
import Components, { AntDesignVueResolver } from 'vite-plugin-components'

// https://github.com/hannoeru/vite-plugin-pages
import Pages from 'vite-plugin-pages'

export default defineConfig({
  plugins: [
    Vue(),
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
    })
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    open: true
  }
})
