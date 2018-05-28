<template>
  <div id="person">


    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">


      <el-form-item label="图片上传" prop="img">

        <el-upload
          action="/api/index/person/upload"
          list-type="picture-card"
          :on-success="handleSuccess"
          :on-remove="handleRemove"
          :file-list="ruleForm2.img"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>

      </el-form-item>

      <el-form-item label="名称" prop="name">
        <el-input v-model="ruleForm2.name"></el-input>
      </el-form-item>


      <el-form-item label="新密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>
<script>
  export default{
    name: 'list-person',
    data(){

      var validatePass = (rule, value, callback) => {
        if (value === '') {
//          callback(new Error('请输入密码'));
          callback();
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (this.ruleForm2.pass !== '' && value === '') {
          callback(new Error('请再次输入密码'));
//          callback();
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          name: '',
          pass: '',
          checkPass: '',
          img: []
        },
        rules2: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ],
        },


        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    created(){
      if (!localStorage.users) {
        return
      }
      let users = JSON.parse(localStorage.users)
      let id = users.id;


      this.$http.get('/api/index/person/person?id=' + id).then(res => {
//        console.log(res);
        let body = res.body[0]
//        console.log(body.img);
        if (body.img) {
          body.img =  JSON.parse(body.img)
        }
        this.ruleForm2 = body
//        console.log(this.ruleForm);
      })
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
//            console.log(this.ruleForm2);
            let id = 1
            let obj = Object.assign({}, this.ruleForm2)
            obj.img = JSON.stringify(obj.img)
//            console.log(obj);
            this.$http.post('/api/index/person/upd?id=' + id, obj, {
              headers: {
                "content-type": "application/json"
              }
            }).then((res) => {
//              console.log(res);
              if (res.body == 'ok') {
                this.$message({
                  message: '修改成功',
                  type: 'success'
                });
                this.ruleForm2.pass=''
                this.ruleForm2.checkPass=''
              } else {
                this.$message.error('系统错误');
              }
            })
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

      handleRemove(file, filelist) {
        this.ruleForm2.img = filelist;
      },
      handleSuccess(res, file, filelist) {
//        console.log(filelist);
        this.ruleForm2.img = filelist.slice(filelist.length - 1);
      },


    }
  }
</script>
<style scoped lang='scss'>

</style>
