const state = {
    cartItems: [],
    showOrderFormStatus: false,
};

const getters = {
    cartItemCount: (state) => state.cartItems.length,
    cartTotalPrice: (state) =>
        state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
};

const actions = {
    getLocalStorageCartItems({ commit }) {
        const productList = JSON.parse(localStorage.getItem('cartItems')) || [];
        commit('setCartItem', productList);
    },
    getOrderFormStatus({ commit }) {
        const showOrderForm = JSON.parse(localStorage.getItem('showOrderForm')) || false;
        commit('setOrderFormStatus', showOrderForm);
    },
    addToCart({ commit, state }, product) {
        const itemIndex = state.cartItems.findIndex((item) => item.id === product.id);
        if (itemIndex !== -1) {
            commit('incrementCartItemQuantity', itemIndex);
        } else {
            commit('addCartItem', product);
        }
        commit('setLocalStorageCartItems');
    },
    removeFromCart({ commit }, productId) {
        commit('removeCartItem', productId);
        commit('setLocalStorageCartItems');
    },
    clearCart({ commit }) {
        commit('setCartItem', []);
        commit('setLocalStorageCartItems');
    },
    showOrderForm({ commit }, status) {
        commit('setOrderFormStatus', status);
        commit('setLocalStorageOrderFormStatus');
    },
};

const mutations = {
    setOrderFormStatus(state, status) {
        state.showOrderFormStatus = status;
    },
    setLocalStorageOrderFormStatus() {
        localStorage.setItem('showOrderForm', JSON.stringify(state.showOrderFormStatus));
    },
    setLocalStorageCartItems() {
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    setCartItem(state, productList) {
        state.cartItems = productList;
    },
    addCartItem(state, product) {
        state.cartItems.push({ ...product, quantity: 1 });
    },
    incrementCartItemQuantity(state, itemIndex) {
        state.cartItems[itemIndex].quantity++;
    },
    removeCartItem(state, productId) {
        state.cartItems = state.cartItems.filter(item => item.id !== productId);
    }

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
