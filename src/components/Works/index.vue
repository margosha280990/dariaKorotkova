<template lang="pug">
  .about
    h2.title Страница "Мои работ"
    .form
      h3.form-title Добавить работа
      .row
        app-input(
          placeholder="Название проекта"
          type="text"
          v-model="fields.title"
        )
      .row
        app-input(
          placeholder="Технологии"
          type="text"
          v-model="fields.tech"
        )
      .row
        label.upload
          input(type="file").type-file
          .upload__icon
          .upload__text Загрузить картинку
</template>
<script>
export default {
  data: () => ({
    fields: {
      title: "",
      tech: ""
    }
  }),
  components: {
    AppInput: require('Input')
  }
}
</script>
<style src="./style.scss" lang="scss" scoped></style>
