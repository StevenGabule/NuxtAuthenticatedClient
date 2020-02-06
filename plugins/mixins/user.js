import Vue from 'vue';
import {mapGetters} from 'vuex';

const Validation = {
  install(Vue, option) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          user: 'user',
          authenticated: 'authenticated'
        })
      }
    })
  }
};
Vue.use(Validation);
