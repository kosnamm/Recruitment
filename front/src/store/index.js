import { createStore } from 'vuex'

const store = createStore({
    state: {
        user: JSON.parse(localStorage.getItem('user')) || null,
        token: localStorage.getItem('token') || null,
        alertMessage: '',
        showAlert: false,
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        },
        SET_TOKEN(state, token) {
            state.token = token
        },
        LOGOUT(state) {
            state.user = null;
            state.token = null;
        },
        SET_ALERT(state, message) {
            state.alertMessage = message;
            state.showAlert = true;
        },
        CLEAR_ALERT(state) {
            state.alertMessage = '';
            state.showAlert = false;
        }
    },

    actions: {
        login({ commit }, { user, token }) {
            commit('SET_USER', user);
            commit('SET_TOKEN', token);
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);
        },
        logout({ commit }) {
            commit('LOGOUT');
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        },
        showAlert({ commit }, message) {
            commit('SET_ALERT', message);
        },
        clearAlert({ commit }) {
            commit('CLEAR_ALERT');
        },
    },
    getters: {
        isAuthenticated: (state) => !!state.token,
        getUser: (state) => state.user,
        alertMessage: (state) => state.alertMessage,
        showAlert: (state) => state.showAlert,
    },
});

export default store;