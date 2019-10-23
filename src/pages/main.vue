<template>
<div class="main">
    <v-left></v-left>
    <v-right></v-right>
</div>
</template>
<script>
import vLeft from '../components/left'
import vRight from '../components/right'
export default {
    components:{
        vLeft,
        vRight
    }
}
</script>
<style scoped lang="scss">
.main{
   width: 100vw;
    background-color: #eee;
    height: 100vh;
    display: flex;
}
</style>