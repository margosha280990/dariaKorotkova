<template lang="pug">
  button(
    type="button",
    @click.prevent="handleClick"
  ) {{title}}
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Отправить'
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>
<style src="./style.scss" lang="scss" scoped></style>