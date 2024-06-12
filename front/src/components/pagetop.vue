<template>
    <header class="header">
        <nav class="nav">
            <div class="logo">
                <a href="/" accesskey="h" tittle="OFS">Offer For Students</a>
                <span class="logo-switches">
                    <button id="theme-toggle" accesskey="t" title="(Alt + T)">
                        <svg id="moon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                        <svg id="sun" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                    </button>
                </span>
            </div>
            <ul id="menu">
                <!-- <li v-for="(item, index) in titledata" :key="index">
                    <router-link v-if="isInternalPath(item.path)" :to="item.path">{{ item.describe }}</router-link>
                    <a v-else :href="item.path" target="_blank">{{ item.describe }}</a>
                </li> -->
                <li v-for="(item, index) in titledata" :key="index">
                    <router-link v-if="isInternalPath(item.path)" :to="item.path"> {{ item.describe }}</router-link>
                    <a v-else :href="item.path" target="_blank">{{ item.describe }}</a>
                </li>
            </ul>

        </nav>
    </header>
</template>
<script>

export default {
    name: 'pageTop',
    methods: {
        isInternalPath(path) {
            return path.startsWith('/')
        }
    },
    data() {
        return {
            titledata: [
                {
                    describe: 'Search',
                    path: '/search'
                },
                {
                    describe: "Upload",
                    path: '/upload'
                },
                {
                    describe: 'Login',
                    path: '/login'
                },
                {
                    describe: 'SignUp',
                    path: '/signup'
                }
            ]
        }
    }
}


</script>

<style>
@import "../assets/css/stylesheet.min.67a6fb6e33089cb29e856bcc95d7aa39f70049a42b123105531265a0d9f1258b.css";
</style>