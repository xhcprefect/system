<template>
<div class="right">
    <h1>{{$route.name}}</h1>
    <router-view></router-view>
</div>
</template>
<script>
export default {
}
</script>
<style scoped lang="scss">
.right{
    text-align: center;
    flex: 1;
    h1{
        font-size: 30px;
        text-align: center;
        margin: 20px;
    }
}
</style>