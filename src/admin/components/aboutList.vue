<template lang="pug">
    .about-list
        .content
            ul.list
                li.item(v-for="about in abouts")
                    about-list-item(
                        :about="about"
                        @removeAbout="removeAbout"
                    )

        .new-skill
            .skill
            .percent
            .add-skill
</template>

<script>
import aboutListItem from './aboutListItem';

export default {
    props: {
        abouts: Array
    },
    components: {
        aboutListItem
    },
    methods: {
        removeAbout(aboutId) {
            this.$emit('removeAbout', aboutId);
        }
    }
}
</script>

<style lang="postcss" scoped>
    .list {
        font-size: 24px;
        border-bottom: 1px solid #ededed;
    }

    .item {
        border-bottom: 1px solid #ededed;
        &:last-child {
            border-bottom: none;
        }
    }

    .new-skill {
        color: #777;
        padding: 10px 15px;
        text-align: right;
        position: relative;
        font-size: 14px;
    }
</style>