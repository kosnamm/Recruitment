<template>
    <PageTop></PageTop>
    <div class="search-box">
        <input
            type="text"
            v-model="query"
            @input="handleSearch"
            placeholder="输入公司名称"
        />
        <button @click="handleSearch">Search</button>
    </div>
    <div v-if="searchResults.length > 0" class="search-results">
        <ul>
            <li v-for="(result, index) in searchResults" :key="index">
                {{ result.companyName }}
            </li>
        </ul>
    </div>
    <div v-else-if="query.lenght > 0" class="no-results">
        No results found for "{{ query }}"
    </div>
</template>

<script>
import PageTop from '../components/PageTop.vue';
import axios from 'axios';
export default{
    name: 'SearchView',
    components: PageTop,
    data(){
        return {
            query:'',
            searchResults:[],
        }
    },
    methods:{
        async handleSearch(){
            if (this.query.trim() === ''){
                this.searchResults = [];
                return
            }
            try{
                // todo
                const response = await axios.get('BACKEND_URL/search?companyName=${this.query}');
                this.searchResults = response.data;
            }catch(error) {
                console.error('Error fetching search results:',error);
                this.searchResults = [];
            }
        }
    }
};

</script>
<style>
@import "../assets/css/stylesheet.min.67a6fb6e33089cb29e856bcc95d7aa39f70049a42b123105531265a0d9f1258b.css"
</style>