<template>
    
    <div class="page-container">
        <PageTop></PageTop>
        <div class="upload-form">
            <from @submit.prevent="handleSubmit">
                <div>
                    <label for="companyName">公司名称：</label>
                    <input type="text" id="companyName" v-model="companyName" required />
                </div>
                <div>
                    <label for="startDate">开始日期：</label>
                    <input type="date" id="startdate" v-model="startDate" required />

                </div>
                <div>
                    <label for="endDate">结束日期：</label>
                    <input type="date" id="endDate" v-model="enDate" />
                </div>
                <div>
                    <label for="jobLink">投递链接</label>
                    <input type="url" id="jobLink" v-model="jobLink" required />
                </div>
                <button type="submit">提交</button>
            </from>
        </div>
    </div>
</template>

<script>
import PageTop from '../components/PageTop.vue';
import axios from 'axios';
export default {
    name: 'UploadView',
    components: PageTop,
    data() {
        return {
            companyName: '',
            startDate: '',
            endDate: '',
            jobLink: '',
        };
    },
    methods: {
        async handleSubmit() {
            const formData = {
                companyName: this.companyName,
                startDate: this.startDate,
                endDate: this.endDate,
                jobLink: this.jobLink,
            };
            console.log('Form Submitted', formData);
            try {
                // todo：backend url
                const response = await axios.post('BACKEND_URL', formData);
                console.log('Response', response.data);
                alert('提交成功');
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('提交失败 请稍后再试');
            }
        }
    },

}
</script>

<style>
@import "../assets/css/stylesheet.min.67a6fb6e33089cb29e856bcc95d7aa39f70049a42b123105531265a0d9f1258b.css"
</style>