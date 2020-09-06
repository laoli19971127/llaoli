<template>
  <label class="lp-radio" :class="{'is-checked': label == model}">
    <span class="lp-radio_input">
      <span class="lp-radio_inner"></span>
      <input
      type="radio"
      class="lp-radio_original"
      :value="label"
      :name="name"
      v-model="model"
      >
    </span>
    <span class="lp-radio_label">
        <slot></slot>
        <!-- 如果没有传内容就显示label -->
        <template v-if="$slots.default">{{label}}</template>
    </span>
  </label>
</template>


<script>
export default {
   name:"LpRadio",
   inject: {
    RadioGroup: {
      default: ''
    }
  },
   computed: {
    model: {
      get () {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) {
        // 触发父组件的input事件
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    // 用于判断radio是否被radioGroup包裹
    isGroup () {
      return !!this.RadioGroup
    }
  },
   props:{
       label:{
           type:[String,Number,Boolean],
           default:''
       },
       value:null,
       name:{
           type:String,
           default:''
       }
   }
}
</script>

<style>

</style>