<template lang="pug">
  div
    h1 компонент просмотра задания {{$route.params.about}}
    button (@click="goBack") Назад
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>