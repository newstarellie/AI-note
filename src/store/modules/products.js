
const state = {
    productsList: [
        {
            id: 1,
            name: '產品A',
            description: '一個很棒的產品',
            price: 100,
            inventory: 10,
            image: 'https://fakeimg.pl/100x30/'
        },
        {
            id: 2,
            name: '產品B',
            price: 200,
            description: '的產品B',
            inventory: 5,
            image: 'https://fakeimg.pl/100x30/'
        },
    ],
};

const getters = {
    allProducts: (state) => state.productsList,
};

const actions = {
    // 在此定義與產品相關的異步操作，例如從 API 獲取產品數據
    setProducts: (state, products) => (state.products = products),

};

const mutations = {
    // 在此定義更新 state 的同步操作
};

export default {
    // 這是啥? 
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
