<template lang="pug">
    div 
        div.about
            about-input(
                @addGroup="addGroup"
            )
            about-list(
                :abouts="abouts"
                @removeAbout="removeAbout"
            )
        pre {{abouts}}
</template>

<script>
import aboutInput from './aboutInput';
import aboutList from './aboutList';

export default {
    data() {
        return {
            abouts: []
        }
    },
    components: {
        aboutInput,
        aboutList
    },
    methods: {
        addGroup(about) {
            this.abouts.push(about);
        },
        removeAbout(aboutId) {
            this.abouts = this.abouts.filter(item => item.id !== aboutId);
        }
    }
}
</script>

<style lang="postcss" scoped>
    .about {
        margin-top: 100px;
        background: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
    }
</style>