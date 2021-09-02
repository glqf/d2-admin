import path from 'path'

import { defineConfig } from 'vite'

import Vue from '@vitejs/plugin-vue'

import { visualizer } from 'rollup-plugin-visualizer'

// https://github.com/antfu/vite-plugin-md
import Markdown from 'vite-plugin-md'

// https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx
import Jsx from '@vitejs/plugin-vue-jsx'

// https://github.com/antfu/unplugin-vue-components
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://github.com/hannoeru/vite-plugin-pages
import Pages from 'vite-plugin-pages'

// https://github.com/visualfanatic/vite-svg/tree/vite-plugin-svg
// support: load svg image as vue component
import Svg from 'vite-plugin-vue-svg'

// https://github.com/anncwb/vite-plugin-svg-icons
// support: load all SVG images from the specified folder as icons
import SvgIcons from 'vite-plugin-svg-icons'

// https://github.com/antfu/purge-icons
// support: <span class="iconify" data-icon="fa:home"></span>
import PurgeIcons from 'vite-plugin-purge-icons'

// https://github.com/antfu/unplugin-icons
// support: <i-mdi-account-box/>
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import { D2AdminComponentsResolver } from './d2-admin/build/resolver.js'

const resolve = p => path.resolve(process.cwd(), p)

export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
    Jsx(),
    Svg(),
    Components({
      extensions: ['vue', 'md', 'svg', 'jsx'],
      include: [/\.vue$/, /\.md$/, /\.jsx$/],
      dirs: ['src/components'],
      dts: true,
      directoryAsNamespace: true,
      globalNamespaces: ['your-ignore-directory-name'],
      importPathTransform: path => path.endsWith('.svg') ? `${path}?component` : undefined,
      deep: true,
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          componentPrefix: 'icon'
        }),
        D2AdminComponentsResolver()
      ]
    }),
    Pages({
      pagesDir: 'src/views',
      exclude: [
        '**/components/*.vue'
      ],
      extensions: ['vue', 'jsx']
    }),
    visualizer({
      open: true
    }),
    PurgeIcons(),
    SvgIcons({
      iconDirs: [
        resolve('d2-admin/assets/svg/icon')
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
      'd2-admin': '/d2-admin',
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
