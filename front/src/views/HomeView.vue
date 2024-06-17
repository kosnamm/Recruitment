<template>
    <div class="home">
        <PageTop></PageTop>
        <div class="home-container">
            <h1>2024 Fall</h1>
            <CompanyInfo></CompanyInfo>
        </div>
        <footer class="page-footer">
            <nav class="pagination">
                <a class="next" href="index.html">»</a>
            </nav>
        </footer>
        
    </div>
    

</template>

<script>
import PageTop from '../components/PageTop.vue';
import CompanyInfo from '../components/CompanyInfo.vue'
import axios from 'axios';
export default {
    name: 'HomeView',
    components: {
        PageTop,
        CompanyInfo,
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