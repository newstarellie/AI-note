<template>
    <div class="checkout-form">
        <h2>填寫訂單詳情</h2>
        <form @submit.prevent="submitOrder">
            <div class="form-group">
                <label for="name">姓名</label>
                <input type="text" id="name" v-model.trim="orderData.name" :class="{ invalid: !isNameValid }">

                <!-- todo 設定提示文字 -->
                <div class="invalid-feedback">請輸入正確的姓名</div>
            </div>
            <div class="form-group">
                <label for="email">電子郵件</label>
                <input type="email" id="email" v-model.trim="orderData.email" :class="{ invalid: !isEmailValid }">
                <div class="invalid-feedback">請輸入正確的電子郵件</div>
            </div>
            <div class="form-group">
                <label for="address">地址</label>
                <input type="text" id="address" v-model.trim="orderData.address" :class="{ invalid: !isAddressValid }">
                <div class="invalid-feedback">請輸入正確的地址</div>
            </div>
            <button type="submit" class="btn btn-primary" :disabled="!isFormValid" @click="submitOrder">送出訂單</button>
        </form>
    </div>
</template>

<script>
import { DateTime } from 'luxon';
import { v4 as uuidv4 } from 'uuid';


export default {
    data() {
        return {
            orderData: {
                name: '',
                email: '',
                address: '',
            },
            orderId: '',
            isNameValid: true,
            isEmailValid: true,
            isAddressValid: true,
        }
    },
    computed: {
        isFormValid() {
            return this.isNameValid && this.isEmailValid && this.isAddressValid;
        },
    },
    methods: {
        submitOrder() {
            // 送出訂單的邏輯

            // alert('訂單已送出');
            this.$router.push('/');
            this.$store.dispatch('order/writeDataToFirebase', {
                orderId: this.orderId,
                payload: {
                    clientInfo: this.orderData,
                    orderInfo: {
                        cartItems: { ...this.$store.state.cart.cartItems },
                        totalPrice: this.$store.getters['cart/cartTotalPrice'],
                        orderCreatedTime: DateTime.now().toFormat('yyyy-MM-dd HH:mm'),
                    }
                }
            });

            this.$store.dispatch('cart/clearCart');
            this.$store.dispatch('cart/showOrderForm', false)
        },
        validateForm() {
            this.isNameValid = this.orderData.name;
            this.isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.orderData.email);
            this.isAddressValid = this.orderData.address.trim().length > 0;
        },
    },
    watch: {
        orderData: {
            deep: true,
            handler() {
                this.validateForm();
            },
        },
    },
    mounted() {
        // 設定預設值或從購物車取得訂單資料
        this.orderData = {
            name: '',
            email: '',
            address: '',
        };
        this.validateForm();
    },
    created() {
        this.orderId = uuidv4();


    }
};
</script>
<style scoped lang="scss">
button {
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
}
</style>