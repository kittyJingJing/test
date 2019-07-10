<template>
  <div>
    <h3>MemberContainer</h3>
   
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    created(){
       Toast({
        message: 'Upload Complete',
        position: 'bottom',
        duration: 5000,
     
       });
   },
    
}
</script>

<style lang="scss" scoped>

</style>
