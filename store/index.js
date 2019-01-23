import Vue from 'vue'
import Vuex from 'vuex'
import blogs from './modules/blogs'
import createLogger from './plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    blogs
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})