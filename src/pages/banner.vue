<template>
  <div class="wrap">
    <div class="add">
      <el-button @click="dialogFormVisible = true">添加</el-button>
    </div>
    <div class="banner">
      <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        style="width: 100%"
        border
        height="350"
      >
        <el-table-column type="index" width="50" label="序号"></el-table-column>
        <el-table-column property="img" label="图片" width="600">
          <template slot-scope="scope">
            <img :src="scope.row.img" alt="">
          </template>
        </el-table-column>
        <el-table-column property="des" label="描述" width="120"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!-- <el-button @click="btn(scope)">查看</el-button> -->
            <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="添加图片" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="图片路径" :label-width="formLabelWidth">
          <el-input v-model="form.img" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input v-model="form.des" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import api from "../api/api";
export default {
  data() {
    return {
      tableData: [],
      currentRow: null,
      dialogFormVisible: false,
      form: {
        img: "",
        des: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    btn(a) {
      console.log(a);
    },
    add() {
      console.log(this.form);
      dialogFormVisible: false,
        this.axios({
          url: api.addImg,
          params: this.form
        }).then(res => {
          console.log(res);

          if (res.data.isok) {
            this.$message({
              message: res.data.info,
              type: "success"
            });
            this.init();
          } else {
          }
        });
    },
    del(id) {
      console.log(id);
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
              method: "get",
              url: api.del,
              params: {
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
        method: "get",
        url: api.banner
      }).then(res => {
        console.log(res);

        this.tableData = res.data.data;
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style scoped lang="scss">
.banner {
  width: 100%;
  height: 300px;
  margin: auto;
}
.el-button {
  margin-bottom: 20px;
}
.wrap{
    width: 80%;
    margin: auto;
}
.add {
    background-color: #ccc;
    width: 100%;
    margin: auto;
}
.add .el-button{
    width: 50%;
    margin: 10px;
}
img{
    width: 100%;
    height: 100%;
}
</style>