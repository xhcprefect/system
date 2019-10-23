<template>
<div class="box">
    
    <v-header></v-header>
    <v-main></v-main>
</div>
</template>
<script>
import vMain from './main'
import vHeader from '../components/header'
export default {
    components:{
        vMain,
        vHeader
    }
}
</script>
<style scoped lang="scss">
.box{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>