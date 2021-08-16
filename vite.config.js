import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

// https://github.com/antfu/vite-plugin-components
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components'

// https://github.com/hannoeru/vite-plugin-pages
import Pages from 'vite-plugin-pages'

export default defineConfig({
  plugins: [
    Vue(),
    ViteComponents({
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
