<template lang="pug">
    .about-item
        label.label
            .title {{about.name}}
            .percent 75 %
        .buttons
            .button
                router-link(
                    tag="button"
                    :to="`/view/${about.name}`"
                ).view -->
            .button
                button(
                    type="button"
                ).edit YU
            .button
                button(
                    type="button"
                    @click="removeAbout"
                ).remove X
</template>

<script>
export default {
    props: {
        about: Object
    },
    methods: {
        removeAbout() {
            this.$emit('removeAbout', this.about.id);
        }
    }
}
</script>


<style lang="postcss" scoped>
    .about-item {
        display: flex;
        align-items: center;

        &:hover {
            .edit {
                visibility: visible;
            }

            .remove {
                visibility: visible;
            }

            .view {
                visibility: visible;
            }
        }
    }

    .label {
        display: flex;
        align-items: center;
        flex: 1;
    }

    .title {
        padding: 15px 0;
        display: block;
        line-height: 1.2;
    }

    .buttons {
        width: 180px;
        display: flex;
        flex-direction: row
    }

    .button {
        width: 50px;
    }

    .view {
        visibility: hidden;
        background: transparent;
        cursor: pointer;
        border: none;
        color: deeppink;
        font-size: 24px;
    }

    .edit {
        background: transparent;
        border: none;
        color: darkseagreen;
        cursor: pointer;
        font-size: 20px;
        visibility: hidden;
    }

    .remove {
        background: transparent;
        border: none;
        color: firebrick;
        cursor: pointer;
        font-size: 20px;
        visibility: hidden;
    }
</style>