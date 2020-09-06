
<template>
  <div class="lp-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"LpFrom",
  props:{
    model:{
      type:Object,
      required:true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide (){
    return {
      From:this
    }
  }
}
</script>

<style>

</style>