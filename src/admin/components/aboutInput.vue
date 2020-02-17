<template lang="pug">
    .about-input
        input(
            type="text"
            placeholder="Название новой группы"
            autofocus
            v-model="about.name"
            @keydown.enter="addGroup"
        ).input
</template>

<script>
let uniqId = 0;
export default {
    data () {
        return {
            about: {
                id: 0,
                name: ''
            }
        }
    },
    methods: {
        addGroup() {
            uniqId++;
            this.about.id = uniqId;
            this.$emit('addGroup', {...this.about});
            this.about.name = "";
        }
    }
}
</script>

<style lang="postcss" scoped>
    .input {
        font-size: 24px;
        padding: 16px 16px 16px 60px;
        border: none;
        background: rgba(0, 0, 0, 0.003);
        box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
        line-height: 1.4em;
        outline: none;
        color: inherit;
        width: 100%;
        background: #fff;
    }
</style>