<template>
  <div id="addre">
    aaa
  </div>
</template>
<script>
  export default{
    name: 'addre',
    data(){
      return {
        data: []
      }
    },

    created(){
      jQuery.ajax({
        url: 'http://api.jisuapi.com/area/province?appkey=f1c1640838697b20',
        dataType: 'JSONP',
        success:  (a) =>{
//          console.log(a);
          let arr=a.result
            for(var i=0;i<arr.length;i++){
//              console.log(arr[i]);
                this.data.push(arr[i])
            }
          console.log(this.data);
        }
      })
    },

  }
</script>
<style scoped lang='scss'>

</style>
