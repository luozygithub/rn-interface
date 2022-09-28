<template>
  <div class="SingleNav">
    <template v-for="(item,index) in navList">
      <div class="nav" :class="{'active':item.index==value}" @click="$emit('change',item.index)" :key="index">
        {{ item.name }}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "SingleNav",
  props: ['value', 'navList'],
  model:{
    prop: 'value',
    event: 'change'
  }
}
</script>

<style lang="scss" scoped>

.SingleNav {
  display: flex;

  height: 30px;
  margin-bottom: 10px;


  margin-top: 20px;

  .active {
    border-bottom: 2px solid #a97fff!important;
    color: #361f63;
  }

  .nav {
    font-size: 12px;
    text-align: center;
    border-bottom: 2px solid #eaeaea;
    cursor: pointer;
    min-width: 100px;
    height: 30px;
    opacity: 1;

  }
}

</style>
