<template>
    <div v-if="visible" class = "alert-overlay">
        <div class="alert-box">
            <p>{{ message }}</p>
            <button @click="closeAlert">Ok</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            required : true,
        },
        visible:{
            type: Boolean,
            default:false,
        }
    },
    // data(){
    //     return {
    //         visible:false,
    //     };
    // },
    methods:{
        // showAlert(){
        //     this.visible = true;
        // },
        closeAlert(){
            this.$emit('close');
        },
    },
};
</script>
<style>
.alert-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.alert-box {
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}
/* @import "../assets/css/stylesheet.min.67a6fb6e33089cb29e856bcc95d7aa39f70049a42b123105531265a0d9f1258b.css" */
</style>