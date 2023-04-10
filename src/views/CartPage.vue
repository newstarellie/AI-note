<template>
    <div class="cart-page">
        <h1>購物車</h1>
        <Cart :items="cartItems" @updateItem="updateCartItem" @removeItem="removeCartItem"
            :showingOrderForm="showingOrderForm" />
        <div class="cart-total">
            <p>總金額: {{ totalPrice }}</p>
        </div>
        <button class="checkout-btn" v-if="!showingOrderForm" @click="checkout" :disabled="totalPrice === 0">結帳</button>
    </div>
    <div class="order-form-overlay" v-if="showingOrderForm">
        <div class="order-form-container">
            <OrderForm @submitOrder="closeOrderForm" />
            <button class="close-btn" @click="hideOrderForm">關閉</button>
        </div>
    </div>
</template>

<script>
import Cart from '@/components/Cart.vue';
import OrderForm from './OrderForm.vue';

export default {
    name: 'CartPage',
    components: {
        Cart,
        OrderForm
    },
    data() {
        return {
        };
    },
    computed: {
        showingOrderForm() {
            return this.$store.state.cart.showOrderFormStatus;
        },
        cartItems() {
            // 從 Vuex store 獲取購物車中的商品
            return this.$store.state.cart.cartItems;
        },
        totalPrice() {
            return this.$store.getters['cart/cartTotalPrice'];
        },
    },
    methods: {
        updateCartItem(payload) {
            this.$store.dispatch('cart/updateCartItem', payload);
        },
        removeCartItem(payload) {
            this.$store.dispatch('cart/removeFromCart', payload);
        },
        checkout() {
            // 在這裡添加結帳邏輯，例如驗證購物車內容，導向付款頁面等
            alert('感謝您的購買！');
            this.$store.dispatch('cart/showOrderForm', true);
        },
        closeOrderForm() {
            this.$store.dispatch('cart/setOrderForm', false);
        },
    },
    created() {
        this.$store.dispatch('cart/getLocalStorageCartItems');
        this.$store.dispatch('cart/getOrderFormStatus');
    },
};
</script>

<style scoped lang="scss">
.cart-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
}

.cart-total {
    font-size: 1.25rem;
    font-weight: bold;
    margin-top: 1rem;
}

.checkout-btn {
    background-color: #007bff;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 1rem;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    &:hover {
        background-color: #0056b3;
    }

}
</style>
