<template>
  <div class="lp-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'LpCheckboxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  }
}
</script>