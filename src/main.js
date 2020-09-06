import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import LpButton from './components/Button'
import LpDialog from './components/Dialog'
import LpInput from './components/Input'
import LpSwitch from './components/Switch'
import LpRadio from './components/Radio'
import LpRadioGroup from './components/RadioGroup'
import LpCheckBox from './components/CheckBox'
import LpCheckboxGroup from './components/CheckboxGroup'
import LpFrom from './components/From'
import LpFromItem from './components/FromItem'
import './assets/fonts/iconfont.css'

Vue.config.productionTip = false;
Vue.component(LpButton.name,LpButton)
Vue.component(LpDialog.name,LpDialog)
Vue.component(LpInput.name,LpInput)
Vue.component(LpSwitch.name,LpSwitch)
Vue.component(LpRadio.name,LpRadio)
Vue.component(LpRadioGroup.name,LpRadioGroup)
Vue.component(LpCheckBox.name,LpCheckBox)
Vue.component(LpCheckboxGroup.name,LpCheckboxGroup)
Vue.component(LpFrom.name,LpFrom)
Vue.component(LpFromItem.name,LpFromItem)
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
