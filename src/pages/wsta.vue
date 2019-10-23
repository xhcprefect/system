<template>
  <div>
    <div class="fedu">
      <el-tabs v-model="activeName" @tab-click="handleClick(id=1)">
        <el-tab-pane label="水站" name="first">
          <div class="add">
            <el-button type="primary" @click="dialogFormVisible=true">添加</el-button>
          </div>
          <el-table :data="tableData3" height="350" border style="width: 100%">
            <el-table-column type="index" width="50" label="序号">
              <template slot-scope="scope">
                <span>{{scope.$index+1}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="水站名称" width="180"></el-table-column>
            <el-table-column prop="tel" label="电话"></el-table-column>
            <el-table-column prop="price" label="价格"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="danger" @click="del1(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="水站评论" name="second">
          <el-select v-model="value" placeholder="请选择" @change="change(value)">
            <el-option label="全部" value></el-option>
            <el-option
              v-for="item in tableData3"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
          <el-table :data="tableData4" height="350" border style="width: 100%">
            <el-table-column type="index" width="50" label="序号">
              <template slot-scope="scope">
                <span>{{scope.$index+1}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="用户名称" width="180"></el-table-column>
            <el-table-column prop="content" label="评论内容"></el-table-column>
            <el-table-column :formatter="dateFormat" prop="time" label="时间"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="danger" @click="del2(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
    <el-dialog title="水站添加" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="评分" :label-width="formLabelWidth">
          <el-input v-model="form.score " auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="月售销量" :label-width="formLabelWidth">
          <el-input v-model="form.count " auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="点赞量" :label-width="formLabelWidth">
          <el-input v-model="form.likeNum" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="浏览量" :label-width="formLabelWidth">
          <el-input v-model="form.readNum" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="商家地址" :label-width="formLabelWidth">
          <el-input v-model="form.address" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="距离" :label-width="formLabelWidth">
          <el-input v-model="form.len" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="商家信息" :label-width="formLabelWidth">
          <el-input v-model="form.des" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="form.tel" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input v-model="form.price" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="图片" :label-width="formLabelWidth">
          <el-input v-model="form.img" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">确定</el-button>
      </div>
    </el-dialog>
  </div>
  <!-- img 图片路径 name 水站名称 score 水站评分 count 月销售量 likeNum 点赞人数 readNum 浏览量 address 地址 len 距离 des 商家信息 tel 电话 price 价格 -->
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
      dialogFormVisible: false,
      form: {
        img: "",
        name: "",
        score: "",
        count: "",
        readNum: "",
        address: "",
        len: "",
        des: "",
        price: "",
        tel: "",
        likeNum: ""
      },
      value: "",
      formLabelWidth: "120px"
    };
  },
  methods: {
    change(id) {
      console.log(id);
      this.axios({
        method: "get",
        url: api.findComment,
        params: {
           waterId: id
        }
      }).then(res => {
        console.log(res);

        this.tableData4 = res.data.data;
      });
    },
    dateFormat(row, column, cellValue, index) {
      const daterc = row[column.property];
      if (daterc != null) {
        const dateMat = new Date(
          parseInt(daterc.replace("/Date(", "").replace(")/", ""), 10)
        );
        const year = dateMat.getFullYear();
        const month = dateMat.getMonth() + 1;
        const day = dateMat.getDate();
        const timeFormat = year + "-" + month + "-" + day;
        return timeFormat;
      }
    },
    handleClick(id) {
      console.log(id);
    },
    init1() {
      this.axios({
        url: api.findWater
      }).then(res => {
        console.log(res);
        this.tableData3 = res.data.data;
      });
    },
    init2() {
      this.axios({
        url: api.findComment
      }).then(res => {
        console.log(res);
        this.tableData4 = res.data.data;
      });
    },

    add() {
      console.log(this.form);
      this.dialogFormVisible = false;
      this.axios({
        url: api.addWater,
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
              url: api.delWater,
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
              url: api.delComment,
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
    }
  },
  filters: {
    timeFilter(obj) {
      var date = new Date(obj);
      var year = date.getFullYear();
      var month = (date.getMonth() + 1 + "").padStart(2, "0");
      var day = (date.getDate() + "").padStart(2, "0");
      return `${year}-${month}-${day}`;
    }
  },
  mounted() {
    this.init1();
    this.init2();
  }
};
</script>
<style scoped lang="scss">
@import url("../commoon/sass/comoon.scss");
.fedu {
  width: 80%;
  margin: 20px auto;
}

.el-select {
  width: 100% !important;
  margin-bottom: 20px;
}
</style>