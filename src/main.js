import { createApp,nextTick } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTimes);
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
