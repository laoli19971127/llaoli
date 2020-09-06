<template>
  <div id="app">
    <lp-from :model="model">
      <lp-from-item label="用户名">
        <lp-input
          placeholder="请输入用户名"
          v-model="model.username"
        ></lp-input>
      </lp-from-item>
      <lp-from-item label="选择">
        <lp-switch v-model="model.active"></lp-switch>
      </lp-from-item>
    </lp-from>
    <lp-input />
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: {
        username: "zhangsan",
        active: true,
      },
    };
  },
};
</script>
<style lang="scss">
#app {
  .lp-input {
    width: 180px;
  }
}
</style>
