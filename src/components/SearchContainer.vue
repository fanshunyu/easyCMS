<template>
    <div>
        <h1>我是search</h1>
        <h2>{{ $store.state.num }}</h2>
        <button @click="add">+1</button>
    </div>
</template>

<script>
    export default {
        methods:{
            add(){
                 this.$store.commit("changeNum");
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>