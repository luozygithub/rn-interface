<template>
  <div style="padding: 0 15px;cursor:pointer" @click="toggleClick">
    <svg
        :class="{'is-active':isActive}"
        class="hamburger"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
    >
      <path
          d="M3.6 905.4H1021v60.9H3.6v-60.9z m1-847.7H1022v60.9H4.6V57.7zM2 472.4h646.9v60.9H2v-60.9z m767.6 259.2l248.2-233.7-248.2-233.6v467.3z"
          p-id="3954" ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    async toggleClick() {
      await  this.$emit('toggleClick')
    }
  }
}
</script>

<style scoped>
.hamburger {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}

.hamburger.is-active {
  transform: rotate(180deg);
}
</style>
