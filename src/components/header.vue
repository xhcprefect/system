<template>
  <div>
    <header>
        <h1 class="head">VUEADMIN</h1>
      <div class="right">
        <el-dropdown>
          <span class="el-dropdown-link">
            <div class="tu">
              邢某某
              <img src="../assets/images/tou.jpg" alt />
            </div>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>消息</el-dropdown-item>
            <el-dropdown-item>管理</el-dropdown-item>
            <el-dropdown-item @click.native="logout">注销登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
  </div>
</template>
<script>
import api from "../api/api";
export default {
  methods: {
    logout() {
      this.axios({
        url: api.exit
      }).then(res => {
        if (res.data.isok) {
          this.$message({
            message: res.data.info,
            type: "success"
          });
          this.$router.push("/login");
        }else{
             this.$message.error(res.data.info);
        }
      });
    }
  }
};
</script>
<style scoped lang="scss">
header {
  width: 100vw;
  height: 60px;
  background-color: #20a0ff;
  line-height: 60px;
}
.right {
  float: right;
  margin-right: 50px;
}
.head{
    width:260px;
    height: 100%;
    font-size:30px;
    color:#ffff;
    opacity: 0.5;
    float: left;
    text-align: center;
    border-right: 1px solid #fff;
}
.tu img {
  width: 50px;
  height: 50px;
  vertical-align: middle;
  float: left;
  border-radius: 50%;
  overflow: hidden;
  margin-top: 3px;
}
.el-dropdown {
  width: 100px;
}
</style>