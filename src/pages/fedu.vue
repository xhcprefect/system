<template>
  <div>
    <div class="fedu">
      <el-tabs v-model="activeName" @tab-click="handleClick(id=1)">
        <el-tab-pane label="家教banner" name="first">
          <div class="add"><el-button type="primary" @click="add1(id=1)">添加</el-button></div>
          <el-table :data="tableData3" height="350" border style="width: 100%">
            <el-table-column type="index" width="50" label="序号">
              <template slot-scope="scope">
                <span>{{scope.$index+1}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="img" label="图片" width="180">
              <template slot-scope="scope">
                <img :src="scope.row.img" alt />
              </template>
            </el-table-column>
            <el-table-column prop="des" label="描述"></el-table-column>

            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="danger" @click="del1(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="家教类型" name="second">
         <div class="add"><el-button type="primary" @click="add2(id=2)">添加</el-button></div>
          <el-table :data="tableData4" height="350" border style="width: 100%">
            <el-table-column type="index" width="50" label="序号">
              <template slot-scope="scope">
                <span>{{scope.$index+1}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="img" label="图片" width="180">
              <template slot-scope="scope">
                <img :src="scope.row.img" alt />
              </template>
            </el-table-column>
            <el-table-column prop="type" label="类型"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="danger" @click="del2(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="家教排行" name="third">
        <div class="add">  <el-button type="primary" @click="add3(id=3)">添加</el-button></div>
          <el-table :data="tableData5" height="350" border style="width: 100%">
            <el-table-column type="index" width="50" label="序号">
              <template slot-scope="scope">
                <span>{{scope.$index+1}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="img" label="图片" width="300">
              <template slot-scope="scope">
                <img :src="scope.row.img" alt />
              </template>
            </el-table-column>
            <el-table-column prop="num" label="报名人数" width="150"></el-table-column>
            <el-table-column prop="teacherImg" label="机构图片">
              <template slot-scope="scope">
                <img :src="scope.row.img" alt />
              </template>
            </el-table-column>
            <el-table-column label="操作" width="100">
              <template slot-scope="scope">
                <el-button type="danger" @click="del3(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
    <el-dialog title="添加图片" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="图片路径" :label-width="formLabelWidth">
          <el-input v-model="form.img" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="描述" :label-width="formLabelWidth" v-if="id==1">
          <el-input v-model="form.des" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="类型" :label-width="formLabelWidth" v-if="id==2">
          <el-input v-model="form.type" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="机构图片" :label-width="formLabelWidth" v-if="id==3">
          <el-input v-model="form.teacherImg" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="人数" :label-width="formLabelWidth" v-if="id==3">
          <el-input v-model="form.num" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add11" v-if="id==1">确定</el-button>
        <el-button type="primary" @click="add22" v-if="id==2">确定</el-button>
        <el-button type="primary" @click="add33" v-if="id==3">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import api from "../api/api";
export default {
  data() {
    return {
      id: 0,
      activeName: "first",
      tableData3: [],
      tableData4: [],
      tableData5: [],
      dialogFormVisible: false,
      form: {
        img: "",
        des: "",
        type: "",
        teacherImg: "",
        num: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    handleClick(id) {
      console.log(id);
    },
    init1() {
      this.axios({
        url: api.teacherBanner
      }).then(res => {
        console.log(res);
        this.tableData3 = res.data.data;
      });
    },
    init2() {
      this.axios({
        url: api.teacherType
      }).then(res => {
        console.log(res);
        this.tableData4 = res.data.data;
      });
    },
    init3() {
      this.axios({
        url: api.teacherTop
      }).then(res => {
        console.log(res);
        this.tableData5 = res.data.data;
      });
    },
    add1(id) {
      this.id = id;
      console.log(id);
      this.dialogFormVisible = true;
    },
    add2(id) {
      this.id = id;
      // console.log();
      this.dialogFormVisible = true;
    },
    add3(id) {
      this.id = id;
      // console.log();
      this.dialogFormVisible = true;
    },
    add11() {
      console.log(this.form);
      this.dialogFormVisible = false;
      this.axios({
        url: api.addTeacherBanner,
        params: this.form
      }).then(res => {
        console.log(res);
        if (res.data.isok) {
          this.$message({
            message: res.data.info,
            type: "success"
          });
          this.init1();
        } else {
        }
      });
    },
    add22() {
      this.dialogFormVisible = false;
      this.axios({
        url: api.addTeacherType,
        params: this.form
      }).then(res => {
        console.log(res);
        if (res.data.isok) {
          this.$message({
            message: res.data.info,
            type: "success"
          });
          this.init2();
        } else {
        }
      });
    },
    add33() {
      this.dialogFormVisible = false;
      this.axios({
        url: api.addTeacherTop,
        params: this.form
      }).then(res => {
        console.log(res);
        if (res.data.isok) {
          this.$message({
            message: res.data.info,
            type: "success"
          });
          this.init3();
        } else {
        }
      });
    },
    del1(id) {
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
              url: api.delBanner,
              params: { id }
            }).then(res => {
              console.log(res);
            });
            this.init1();
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    del2(id) {
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
              url: api.delTeacherType,
              params: { id }
            }).then(res => {
              console.log(res);
            });
            this.init2();
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    del3(id) {
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
              url: api.delTeacherTop,
              params: { id }
            }).then(res => {
              console.log(res);
            });
            this.init3();
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  mounted() {
    this.init1();
    this.init2();
    this.init3();
  }
};
</script>
<style scoped lang="scss">
@import url('../commoon/sass/comoon.scss');
.fedu {
  width: 80%;
  margin:  auto;
}

img {
  width: 100%;
  height: 100%;
}
</style>