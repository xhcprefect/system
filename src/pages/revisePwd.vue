<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="form.name" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="原始密码">
        <el-input v-model="form.oldpass" show-password></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input v-model="form.newpass" show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="confirm" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import api from "../api/api";
export default {
  data() {
    return {
      confirm: "",
      form: {
        name: sessionStorage.getItem("manage"),
        oldpass: "",
        newpass: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.axios({
        method: "post",
        url: api.changePassManage,
        data: this.form
      }).then(res => {
        if (res.data.isok) {
          this.$message({
            message: res.data.info,
            type: "success"
          });
        } else {
          this.$message.error(res.data.info);
        }
      });
    }
  }
};
</script>
<style scoped lang="scss">
div{
    width: 90%;
    margin: 10px auto;
}
.el-button{
    width: 90%;
}
</style>