<template>
  <div class="lp-form-item">
    <label class="lp-form-item_label" :style="{width: this.From.labelWidth}">{{label}}</label>
    <div class="lp-form-item_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
   name:"LpFromItem",
   props:{
     label:{
       type:String
     }
   },
   inject:['From']
}
</script>

<style lang="scss" scoped>
  .lp-form-item{
    margin-bottom: 25px;
    .lp-form-item_label{
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }
    .lp-form-item_content{
      line-height: 40px;
      position: relative;
      font-size: 14px;
      overflow: hidde;
    }
  }
</style>