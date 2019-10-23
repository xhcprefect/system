<template>
  <div>
    <div class="fedu">
      <el-tabs v-model="activeName" @tab-click="handleClick(id=1)">
        <el-tab-pane label="家政banner" name="first">
          <div class="add">
            <el-button type="primary" @click="add1(id==1)">添加</el-button>
          </div>
          <el-table :data="tableData3" height="250" border style="width: 100%">
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
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="danger" @click="del1(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="人员管理" name="second">
          <div class="wrap">
            <el-button type="primary" @click="add2(id==0)">添加</el-button>
            <el-select v-model="value" placeholder="请选择" @change="change(value)">
              <el-option label="全部" value></el-option>
              <el-option v-for="item in list" :key="item.index" :label="item" :value="item"></el-option>
            </el-select>
          </div>
          <el-table :data="tableData4" height="250" border style="width: 100%">
            <el-table-column type="index" width="50" label="序号">
              <template slot-scope="scope">
                <span>{{scope.$index+1}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="用户名称" width="180"></el-table-column>
            <el-table-column prop="tel" label="电话"></el-table-column>
            <el-table-column prop="price" label="价格"></el-table-column>
            <el-table-column prop="age" label="年龄"></el-table-column>
            <el-table-column prop="edu" label="学历"></el-table-column>
            <el-table-column prop="type" label="服务类型"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button @click="ck(scope.row.id)">查看</el-button>
                <el-button type="danger" @click="del2(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
    <el-dialog title="水站添加" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="家政图片" :label-width="formLabelWidth" v-if="id==1">
          <el-input v-model="form.img" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth" v-if="id!=1">
          <el-input v-model="form.name " auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth" v-if="id!=1">
          <el-input v-model="form.age " auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth" v-if="id!=1">
          <el-input v-model="form.tel" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="资格认证" :label-width="formLabelWidth" v-if="id!=1">
          <el-checkbox-group v-model="form.qualification">
            <el-checkbox label="身份证"></el-checkbox>
            <el-checkbox label="学生证"></el-checkbox>
            <el-checkbox label="健康证"></el-checkbox>
            <el-checkbox label="上岗证"></el-checkbox>
            <el-checkbox label="母婴护理师证"></el-checkbox>
            <el-checkbox label="催乳师证"></el-checkbox>
            <el-checkbox label="产后恢复证"></el-checkbox>
            <el-checkbox label="助理家政管理师"></el-checkbox>
            <el-checkbox label="家政管理师"></el-checkbox>
            <el-checkbox label="高级家政管理师"></el-checkbox>
           </el-checkbox-group>
        </el-form-item>
        <el-form-item label="服务项目" :label-width="formLabelWidth" v-if="id!=1">
          <el-checkbox-group v-model="form.type">
            <!-- <el-checkbox v-for="item in checkList2" :key="item" :label="item">{{item}}</el-checkbox> -->
            <el-checkbox label="保姆"></el-checkbox>
            <el-checkbox label="月嫂"></el-checkbox>
            <el-checkbox label="钟点工"></el-checkbox>
            <el-checkbox label="保洁"></el-checkbox>
            <el-checkbox label="家电清洗"></el-checkbox>
            <el-checkbox label="家具保养"></el-checkbox>
            <el-checkbox label="新居开荒"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="学历" :label-width="formLabelWidth" v-if="id!=true">
          <el-input v-model="form.edu" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="工作年限" :label-width="formLabelWidth" v-if="id!=1">
          <el-input v-model="form.year" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="级别" :label-width="formLabelWidth" v-if="id!=1">
          <el-input v-model="form.vNum" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth" v-if="id!=1">
          <el-input v-model="form.price" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="城市" :label-width="formLabelWidth" v-if="id!=1">
          <el-input v-model="form.city" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="经验" :label-width="formLabelWidth" v-if="id!=1">
          <el-input v-model="form.experience" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="点赞数量" :label-width="formLabelWidth" v-if="id!=1">
          <el-input v-model="form.likeNum" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="关注人数" :label-width="formLabelWidth" v-if="id!=1">
          <el-input v-model="form.readNum" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="距离" :label-width="formLabelWidth" v-if="id!=1">
          <el-input v-model="form.len" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="自我评价" :label-width="formLabelWidth" v-if="id!=1">
          <el-input v-model="form.info" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="免冠照片" :label-width="formLabelWidth" v-if="id!=1">
          <el-input v-model="form.img" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add11" v-if="id==1">确定</el-button>
        <el-button type="primary" @click="add22" v-if="id==0">确定</el-button>
        <el-button type="primary" @click="xiu" v-if="id!=1&&id!=0">修改</el-button>
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
      list: [],
      dialogFormVisible: false,
      form: {
        img: "",
        name: "",
        age: "",
        tel: "",
        qualification: [],
        type: [],
        edu: "",
        year: "",
        vNum: "",
        price: "",
        city: "",
        experience: "",
        redNum: "",
        likeNum: "",
        len: "",
        info: ""
      },
      value: "",
      formLabelWidth: "120px"
    };
  },
  methods: {
    ck(id) {
      this.dialogFormVisible = true;
      this.id = id;
      console.log(id);

      this.axios({
        method: "get",
        url: api.findHomeWorker,
        params: { id: id }
      }).then(res => {
        console.log(res);
        this.form = res.data.data[0];
        this.form.qualification=this.form.qualification.split(",")
        this.form.type=this.form.type.split(",")
      });
    },
    change(id) {
      console.log(id);
      this.axios({
        method: "get",
        url: api.findHomeWorker,
        params: { id }
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
        url: api.homeBanner
      }).then(res => {
        console.log(res);
        this.tableData3 = res.data.data;
      });
    },
    add1(id) {
      //   this.title = "添加管理员";
      this.dialogFormVisible = true;
      this.id = id;
      console.log(id);
    },
    add2(id) {
      this.dialogFormVisible = true;
      this.id = id;
      console.log(id);
      this.form = {
        img: "",
        name: "",
        age: "",
        tel: "",
        qualification: [],
        type: [],
        edu: "",
        year: "",
        vNum: "",
        price: "",
        city: "",
        experience: "",
        redNum: "",
        likeNum: "",
        len: "",
        info: ""
      };
    },
    xiu() {
      this.dialogFormVisible = false;
      this.axios({
        method: "get",
        url: api.updateHomeWorker,
        params: this.form
      }).then(res => {
        console.log(this.form);

        if (res.data.isok) {
          this.$message({
            message: res.data.info,
            type: "success"
          });
          this.init2();
        }
      });
    },
    init2() {
      this.axios({
        url: api.findHomeWorker
      }).then(res => {
        console.log(res);
        this.tableData4 = res.data.data;
      });
    },
    init3() {
      this.axios({
        method: "get",
        url: api.getHomeType
      }).then(res => {
        console.log(res);
        this.list = res.data.type;
      });
    },
    add11() {
      console.log(this.form);
      this.dialogFormVisible = false;
      this.axios({
        url: api.addHomeBanner,
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
      this.form.qualification =this.form.qualification.toString();
      this.form.type = this.form.type.toString();
      console.log(this.form);
      this.dialogFormVisible = false;
      this.axios({
        url: api.addHomeWorker,
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
    cha(id) {
      this.axios({
        url: api.findRepair,
        params: id
      }).then();
    },
    del1(id) {
      console.log();

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
              url: api.delHomeBanner,
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
              url: api.delRepairComment,
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
  computed: {
    checkBox() {
      return this.form.qualification.split(",");
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
@import url("../commoon/sass/comoon.scss");
.fedu {
  width: 80%;
  margin: 20px auto;
}

.el-select {
  width: 87% !important;
}
img {
  width: 100%;
  height: 100%;
}
.wrap {
  margin-bottom: 20px;
}
</style>