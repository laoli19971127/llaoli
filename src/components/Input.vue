<template>
  <div class="lp-input" :class="{'lp-input_suffix':showSuffix}">
    <input
      class="lp-input_inner"
      :class="{ 'is-disabled': disabled }"
      :placeholder="placeholder"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :disabled="disabled"
      :value="value"
      @input="changeValue"
    />
    <span class="lp-input_suffix">
      <i
        class="lp-icon-cancel"
        v-if="clearable && value"
        @click="handleInput"
      ></i>
      <i
        class="lp-icon-visible"
        v-if="showPassword"
        @click="handlePassword"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "LpInput",
  data () {
    return {
      // 显示是否显示密码框
      passwordVisible: false
    }
  },
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: null,
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  computed:{
      showSuffix(){
          return this.clearable || this.showPassword;
      }
  },
  methods: {
    changeValue(e) {
      this.$emit("input", e.target.value);
    },
    handleInput(){
       this.$emit('input', '')
    },
    handlePassword(){
       this.passwordVisible = !this.passwordVisible
    }
  },
};
</script>

<style lang="scss" scoped>
.lp-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .lp-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.lp-input_suffix{
    .lp-input_inner{
      padding-right: 30px;
    }
    .lp-input_suffix{
      position: absolute;
      right: 10px;
      height: 100%;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
      i{
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645,.045,.355,1);
      }
    }
  }
</style>
