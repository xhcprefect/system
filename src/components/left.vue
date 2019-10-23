<template>






  <div class="box">
    <router-link to="/index/manage" active-class='select' v-if="admin==0">管理员管理</router-link>
    <router-link to="/index/banner" active-class='select' v-if="admin!=0">banner管理</router-link>
    <router-link to="/index/fedu" active-class='select' v-if="admin!=0">家教管理</router-link>
    <router-link to="/index/wsta" active-class='select' v-if="admin!=0">水站管理</router-link>
    <router-link to="/index/repir" active-class='select' v-if="admin!=0">维修管理</router-link>
    <router-link to="/index/housekeep" active-class='select' v-if="admin!=0">家政管理</router-link>
    <router-link to="/index/revisePwd" active-class='select' v-if="admin!=0">修改密码</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      admin: sessionStorage.getItem("isAdmin")
    };
  }
};
</script>
<style scoped lang="scss">
.box {
  width: 260px;
  background-color: #eef1f6;
  a {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: block;
    transition: all 0.5s;
    color: #48576a;
    &:hover {
      background-color: #e4e8f1;
      color: #20a0ff;
    }
  }
  .select {
    background-color: #e4e8f1;
    color: #20a0ff;
  }
}
</style>