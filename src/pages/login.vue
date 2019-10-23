<template>
  <div>
    <div class="slideshow">
      <div class="slideshow-image"></div>
      <div class="slideshow-image"></div>
      <div class="slideshow-image"></div>
      <div class="slideshow-image"></div>
    </div>
    <div class="login">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item>
          <el-select v-model="form.type" placeholder="请输入你的角色">
            <el-option label="超级管理员" value="0"></el-option>
            <el-option label="普通管理员" value="1"></el-option>
            <!-- <el-option label="普通用户" value="2"></el-option> -->
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="form.pass"
            placeholder="请输入密码"
            @keyup.enter.native="onSubmit"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import api from "../api/api";
export default {
  data() {
    return {
      form: {
        name: "",
        type: "",
        pass: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.axios({
        method: "post",
        url: api.login,
        data: this.form
      }).then(res => {
        if (res.data.isok) {
          console.log(res);
          sessionStorage.setItem("isAdmin", res.data.type);
          sessionStorage.setItem("manage", this.form.name);
          this.$message({
            message: res.data.info,
            type: "success"
          });
          this.$router.push("/index");
        } else {
          this.$message.error(res.data.info);
        }
      });
    }
  }
};
</script>
<style scoped >
.slideshow {
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.slideshow-image {
  position: absolute;
  width: 100%;
  height: 100%;
  background: no-repeat 50% 50%;
  background-size: cover;
  -webkit-animation-name: kenburns;
  animation-name: kenburns;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-duration: 16s;
  animation-duration: 16s;
  opacity: 1;
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
.slideshow-image:nth-child(1) {
  -webkit-animation-name: kenburns-1;
  animation-name: kenburns-1;
  z-index: 3;
  background: url("../assets/images/1.jpg") no-repeat;
  background-size: 100%;
}
.slideshow-image:nth-child(2) {
  -webkit-animation-name: kenburns-2;
  animation-name: kenburns-2;
  z-index: 2;
  background: url("../assets/images/2.jpeg") no-repeat;
  background-size: 100%;
}
.slideshow-image:nth-child(3) {
  -webkit-animation-name: kenburns-3;
  animation-name: kenburns-3;
  z-index: 1;
  background: url("../assets/images/3.jpeg") no-repeat;
  background-size: 100%;
}
.slideshow-image:nth-child(4) {
  -webkit-animation-name: kenburns-4;
  animation-name: kenburns-4;
  z-index: 0;
  background: url("../assets/images/4.png") no-repeat;
  background-size: 100%;
}

@-webkit-keyframes kenburns-1 {
  0% {
    opacity: 1;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  1.5625% {
    opacity: 1;
  }
  23.4375% {
    opacity: 1;
  }
  26.5625% {
    opacity: 0;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  98.4375% {
    opacity: 0;
    -webkit-transform: scale(1.21176);
    transform: scale(1.21176);
  }
  100% {
    opacity: 1;
  }
}

@keyframes kenburns-1 {
  0% {
    opacity: 1;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  1.5625% {
    opacity: 1;
  }
  23.4375% {
    opacity: 1;
  }
  26.5625% {
    opacity: 0;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  98.4375% {
    opacity: 0;
    -webkit-transform: scale(1.21176);
    transform: scale(1.21176);
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes kenburns-2 {
  23.4375% {
    opacity: 1;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  26.5625% {
    opacity: 1;
  }
  48.4375% {
    opacity: 1;
  }
  51.5625% {
    opacity: 0;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
}
@keyframes kenburns-2 {
  23.4375% {
    opacity: 1;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  26.5625% {
    opacity: 1;
  }
  48.4375% {
    opacity: 1;
  }
  51.5625% {
    opacity: 0;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
}
@-webkit-keyframes kenburns-3 {
  48.4375% {
    opacity: 1;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  51.5625% {
    opacity: 1;
  }
  73.4375% {
    opacity: 1;
  }
  76.5625% {
    opacity: 0;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
}
@keyframes kenburns-3 {
  48.4375% {
    opacity: 1;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  51.5625% {
    opacity: 1;
  }
  73.4375% {
    opacity: 1;
  }
  76.5625% {
    opacity: 0;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
}
@-webkit-keyframes kenburns-4 {
  73.4375% {
    opacity: 1;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  76.5625% {
    opacity: 1;
  }
  98.4375% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes kenburns-4 {
  73.4375% {
    opacity: 1;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  76.5625% {
    opacity: 1;
  }
  98.4375% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.login {
  position: fixed;
  z-index: 1000;
  width: 400px;
  height: 300px;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  /* text-align: center; */
  background: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
}
.el-select,
.el-button {
  width: 300px !important;
}

.el-form {
  margin: 40px 0 0 -30px;
}
.el-input {
  width: 300px !important;
}
.el-input_inner {
  background: rgba(255, 255, 255, 0.4) !important;
}
</style>