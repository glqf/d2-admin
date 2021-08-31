import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

import { visualizer } from 'rollup-plugin-visualizer'

// https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx
import Jsx from '@vitejs/plugin-vue-jsx'

// https://github.com/nekocode/antd-dayjs-vite-plugin
import AntdDayjs from 'antd-dayjs-vite-plugin'

// https://github.com/antfu/unplugin-vue-components
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://github.com/hannoeru/vite-plugin-pages
import Pages from 'vite-plugin-pages'

// https://github.com/anncwb/vite-plugin-svg-icons
import SvgIcons from 'vite-plugin-svg-icons'

// https://github.com/antfu/purge-icons
// for support: <span class="iconify" data-icon="fa:home"></span>
import PurgeIcons from 'vite-plugin-purge-icons'

// https://github.com/antfu/unplugin-icons
// for support: <i-mdi-account-box/>
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig({
  plugins: [
    Vue(),
    Jsx(),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          componentPrefix: 'icon'
        })
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
    }),
    Icons({
      scale: 1,
      compiler: 'vue3'
    })
  ],
  resolve: {
    alias: {
      '@': '/src',
      'd2-projects': '/d2-projects'
    }
  },
  server: {
    open: true
  },
  build: {
    sourcemap: true
  }
})
