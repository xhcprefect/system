<template>
  <div>
    <el-dialog title="添加管理员" :visible.sync="$store.state.dialogFormVisible">
      <el-form :model="$store.state.form">
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input v-model="$store.state.form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="$store.state.form.pass" auto-complete="off" show-password></el-input>
        </el-form-item>
        <el-form-item label="确认密码" :label-width="formLabelWidth">
          <el-input v-model="confirm" auto-complete="off" show-password></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input v-model="$store.state.form.prop" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="时间" :label-width="formLabelWidth">
          <el-date-picker
            v-model="$store.state.form.time"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="$store.dispatch('change',false)">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import api from '../../api/api'
export default {
    prop:[],
  data() {
    return {
    //   this.$store.statedialogFormVisible: false,
       formLabelWidth: "120px",
        confirm: "",
        form:this.$store.state.form
    };
  },
  methods: {
      init() {
      this.axios({
        method: "get",
        url: api.findManage
      }).then(res => {
        if (res.data.isok) {
          console.log(res);
        }
      });
    },
       add() {
      this.$store.dispatch("change",false)
    //   this.dialogFormVisible = false;
      console.log(this.form);
      this.axios({
        method: "get",
        url: api.addManage,
        params: this.form
      }).then(res => {
        if (res.data.isok) {
          this.$message({
            message: res.data.info,
            type: "success"
          });
          this.init();
        } else {
          this.$message.error(res.data.info);
        }
      });
      this.confirm='';
    },
    mounted() {
        this.init()
    },
  }
};
</script>
<style scoped lang="scss">
.el-form-item .el-input {
  width: 80%;
}
</style>