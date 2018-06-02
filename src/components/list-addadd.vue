<template>
  <div id="addre">
    <div class="title" style="width: 70%">添加地址</div>
    <el-form ref="form" :model="form" label-width="100px"  :rules="rules" style="margin-top: 50px">
      <el-form-item label="地址" prop="sheng" >
        <el-select
          v-model="form.sheng"
          @change="choseProvince"
          placeholder="省级地区"
          autoComplete='address-level1'
          style="margin-left: -300px;margin-right: 10px;width: 150px">
          <el-option
            v-for="item in form.province"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>

      <!--{{form.sheng}}-->

        <el-select
          v-model="form.shi"
          @change="choseCity"
          placeholder="市级地区"
          autoComplete='address-level1'
          style="margin-right: 10px;width: 150px">
          <el-option
            v-for="item in form.city"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>

      <!--{{form.shi}}-->

        <el-select
          v-model="form.qu"
          @change="choseBlock"
          placeholder="区级地区"
          autoComplete='address-level1'
          style="width: 150px">
          <el-option
            v-for="item in form.area"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <!--{{form.qu}}-->
      <el-form-item label="地址" prop="input" style="margin-top: 50px;width: 60%">
        <el-input v-model="form.input" placeholder="请输入具体地址"  autoComplete='address-level1'></el-input>
      </el-form-item >
      <el-form-item label="电话" prop="tel" style="margin-top: 50px;width: 40%">
        <el-input v-model="form.tel" placeholder="请输入电话"  autoComplete='address-level1'></el-input>
      </el-form-item >
      <el-button type="primary" @click="onSubmit" style="margin-top: 50px;margin-left: -210px">立即创建</el-button>
    </el-form>
  </div>
</template>
<script>
  export default{
    name: 'addre',
    data(){
      var checktel = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        }
        setTimeout(() => {

          if (!/^1[3-9]\d{9}$/.test(value)) {
            callback(new Error('请输入正确的手机号'));
          } else {
            callback();
          }

        }, 1000);
      };
      return {
        form: {
          province: [],
          sheng: '',
          shi: '',
          city: [],
          qu: '',
          area: [],
          input: '',
          tel: ''
        },
        rules: {
          sheng: [
            {required: true, message: '请输入地址', trigger: 'blur'}
          ],
          input: [
            {required: true, message: '请输入具体地址', trigger: 'blur'}
          ],
          tel: [
            {validator: checktel, trigger: 'blur'}
          ]
        }

      }
    },

    created(){
      jQuery.ajax({
        url: 'http://api.jisuapi.com/area/province?appkey=f1c1640838697b20',
        dataType: 'JSONP',
        success: (a) => {
//          console.log(a);
          let arr = a.result
          for (let i = 0; i < arr.length; i++) {
//              console.log(arr[i]);
            this.form.province.push(arr[i])
          }
//          console.log(this.province);
        }
      })


    },
    methods: {
      choseProvince() {
        var val = this.form.sheng
        this.form.city = []
        this.form.shi = ''
//        console.log(val);
        jQuery.ajax({

          url: 'http://api.jisuapi.com/area/city?parentid=' + val + '&appkey=f1c1640838697b20',
          dataType: 'JSONP',
          success: (a) => {
//            console.log(a);
            let arr = a.result
            for (let i = 0; i < arr.length; i++) {
//              console.log(arr[i]);

              this.form.city.push(arr[i])
            }
//          console.log(this.city);
          }
        })

      },
      // 选市
      choseCity() {
        var val = this.form.shi
        this.form.area = []
        this.form.qu = ''
//        console.log(val);
        jQuery.ajax({

          url: 'http://api.jisuapi.com/area/town?parentid=' + val + '&appkey=f1c1640838697b20',
          dataType: 'JSONP',
          success: (a) => {
//            console.log(a);
            let arr = a.result
            for (let i = 0; i < arr.length; i++) {
//              console.log(arr[i]);
              this.form.area.push(arr[i])
            }
//            console.log(this.area);
          }
        })

      },
      // 选区
      choseBlock: function (e) {
//        this.E = e;
//         console.log(this.E)
      },

      onSubmit(){
        if (!localStorage.users) {
          this.$message.error('请先登录')
          return
        }
        this.$refs.form.validate((valid) => {
          if (valid) {
            let users = JSON.parse(localStorage.users)
            let provice=this.form.province.find(val=> val.id==this.form.sheng)
            let city=this.form.city.find(val=> val.id==this.form.shi)
            let area=this.form.area.find(val=> val.id==this.form.qu)
//            console.log(provice);
//            console.log(city);
//            console.log(area);
            let obj={}
            if(!area){
              obj = {
                provice: provice.name,
                city: city.name,
                address: this.form.input,
                tel: this.form.tel,
                uid: users.id,
              }
            }else{
             obj = {
                provice: provice.name,
                city: city.name,
                town: area.name,
                address: this.form.input,
                tel: this.form.tel,
                uid: users.id,
              }
            }

            this.$http.post('/api/admin/user/address', obj, {
              headers: {
                "content-type": "application/json"
              }
            }).then((res) => {
              if (res.body == 'ok') {
                this.$message({
                  message: '添加成功',
                  type: 'success'
                });
                this.$refs.form.resetFields();
              } else {
                this.$message.error('错了哦,请重新添加');
              }
            })
          } else {
            this.$message({
              message: '数据不全，请补充完整',
              type: 'warning'
            });
            return false;
          }
        });
      }

    }

  }
</script>
<style scoped lang='scss'>

</style>
