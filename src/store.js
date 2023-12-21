import { createStore } from 'vuex';
import defaultPair from '@/assets/defaultpair.json';

const store = createStore({
    strict: true,
    state() {
        return {
            currencies: localStorage.getItem('vue-crypto-currencies-new') ? JSON.parse(localStorage.getItem('vue-crypto-currencies-new')) : defaultPair,
            tickers: {},
            chartData: [],
            collapsed: false
        };
    },
    getters: {
        isMenuCollapsed: (state) => state.collapsed,
        getSymbolById: (state) => (symbol) => {
            return state.currencies.find(s => s.symbol === symbol);
        },
        getTickerById: (state) => (symbol) => {
            return state.tickers[symbol];
        }
    },
    mutations: {
        SET_DEFAULT: (state) => {
            state.currencies = defaultPair;
        },
        UPDATE_TICKER: (state, payload) => {
            const tick = state.tickers[payload.symbol];
            payload.pchg = tick ? (payload.price > tick.price ? 1 : -1) : 1;
            state.tickers[payload.symbol] = payload; // Vue.set is not needed in Vuex 4 for Vue 3
        },
        ADD_COIN_PAIR: (state, payload) => {
            if (!state.tickers[payload.symbol]) {
                state.currencies.push(payload);
                localStorage.setItem('vue-crypto-currencies-new', JSON.stringify(state.currencies));
            }
            state.tickers[payload.symbol] = { pchg: 1 }; // Vue.set is not needed
        },
        REMOVE_COIN_PAIR: (state, symbol) => {
            delete state.tickers[symbol]; // Vue.delete is not needed
            state.currencies.splice(state.currencies.findIndex(s => s.symbol === symbol), 1);
            localStorage.setItem('vue-crypto-currencies-new', JSON.stringify(state.currencies));
        },
        TOGGLE_MENU_COLLAPSED: (state) => {
            state.collapsed = !state.collapsed;
        },
    }
});

export default store;
