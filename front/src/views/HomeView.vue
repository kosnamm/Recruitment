<template>
    <div class="home">
        <pageTop></pageTop>
        <h1>2024 Fall</h1>
        <table class="company-list">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>公司名称</th>
                    <th>招聘开启日期</th>
                    <th>招聘截止日期</th>
                    <th>校招官网</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="company in companies" :key="company.id">
                    <td>{{ company.id }}</td>
                    <td>{{ company.name }}</td>
                    <td>{{ company.createDate }}</td>
                    <td>{{ company.endDate }}</td>
                    <td>{{ company.url }}</td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
import pageTop from '../components/pagetop.vue';
import axios from 'axios';
export default {
    name: 'HomeView',
    components: {
        pageTop,
    },
    data() {
        return {
            companies: []
        }
    },
    created() {
        this.fetchCompanies();
    },
    methods: {
        async fetchCompanies() {
            try {
                const response = await axios.get('/api/companies');
                this.companies = response.data;
            } catch (error) {
                console.log('Error fetching companies:', error);
            }
        }
    },
}
</script>

<style>
@import "../assets/css/stylesheet.min.67a6fb6e33089cb29e856bcc95d7aa39f70049a42b123105531265a0d9f1258b.css"
</style>