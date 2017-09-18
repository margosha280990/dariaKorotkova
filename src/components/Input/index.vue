<template lang="pug">
   input.input-field(
      :type="type"
      :placeholder="placeholder"
      @input="changeVal($event.target.value)"
    )
</template>
<script>
export default {
  props: {
    value: String,
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    changeVal(value) {
      console.log('emit', value);
      this.$emit('input', value)
    }
  }
}
</script>
<style src="./style.scss" lang="scss" scoped></style>