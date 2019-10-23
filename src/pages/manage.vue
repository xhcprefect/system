<template>
  <div>
    <div class="search">
      <el-button @click="add1(id=1)">添加</el-button>
      <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="keywords"></el-input>
    </div>

    <div class="message">
      <el-table
        ref="singleTable"
        :data="search(keywords)"
        highlight-current-row
        style="width: 100%"
        border
        height="300"
      >
        <el-table-column type="index" width="50" label="序号"></el-table-column>
        <el-table-column property="name" label="姓名" width="120"></el-table-column>
        <el-table-column property="des" label="属性" width="120"></el-table-column>
        <el-table-column  label="时间" width="120">
            <template slot-scope="scope">{{scope.row.time|timeFilter}}</template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="cha(id=0,scope.row.id)">查看</el-button>
            <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :title="title" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off" :disabled="id==0"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.pass" auto-complete="off" show-password :disabled="id==0"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" :label-width="formLabelWidth" v-if="id!=0">
          <el-input v-model="confirm" auto-complete="off" show-password></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input v-model="form.des" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="时间" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.time"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="timestamp"
          ></el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add" v-if="id==1">确定</el-button>
        <el-button type="primary" @click="xiu" v-if="id!=1">修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import api from "../api/api";
export default {
  data() {
    return {
      id: "",
      index: "",
      confirm: "",
      //   loading: true,
      keywords: "",
      tableData: [],
      currentRow: null,
      dialogFormVisible: false,
      title: "",
      form: {
        name: "",
        pass: "",
        time: "",
        des: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
   
    cha(idx, id) {
      this.index = id;
      this.title = "查看管理员";
      this.dialogFormVisible = true;
      this.id = idx;
      this.axios({
        method: "post",
        url: api.findManage,
        data: { id: id }
      }).then(res => {
        console.log(res);
        this.form = res.data.data[0];
        delete this.form._id;
      });
    },
    xiu() {
      this.dialogFormVisible = false;
      this.axios({
        method: "post",
        url: api.updateManage,
        data: this.form
      }).then(res => {
        if (res.data.isok) {
          this.$message({
            message: res.data.info,
            type: "success"
          });
          this.init();
        }
      });
    },
    add1(id) {
      this.title = "添加管理员";
      this.dialogFormVisible = true;
      this.id = id;
      console.log(id);
      this.form = {
        name: "",
        pass: "",
        time: "",
        prop: ""
      };
    },
    add() {
      this.dialogFormVisible = false;
      console.log(this.form);
      this.axios({
        method: "post",
        url: api.addManage,
        data: this.form
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
      this.form = {
        name: "",
        pass: "",
        time: "",
        prop: ""
      };
      this.confirm = "";
    },
    del(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(action => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });

          if (action == "confirm") {
            this.axios({
              method: "post",
              url: api.delManage,
              data: {
                id
              }
            }).then(res => {
              console.log(res);
            });
            this.init();
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    init() {
      this.axios({
        method: "post",
        url: api.findManage
      }).then(res => {
        if (res.data.isok) {
          console.log(res);
          this.loading = false;
          this.tableData = res.data.data;
        }
      });
    },
    search(keywords) {
      return this.tableData.filter(item => {
        if (item.name.includes(keywords)) {
          return item;
        }
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style scoped lang="scss">
.message {
  width: 80%;
  height: 400px;
  margin: auto;
}
.search {
  margin-bottom: 20px;
}
.el-input {
  width: 300px;
}
.el-form-item .el-input {
  width: 80%;
}
</style>