<template>
    <div class="cart">
        <table class="cart-items">
            <thead>
                <tr>
                    <th>商品</th>
                    <th>價格</th>
                    <th>數量</th>
                    <th>小計</th>
                    <th v-if="!showingOrderForm">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in items" :key="index">
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                    <td>
                        <input type="number" min="1" :value="item.quantity"
                            @input="updateQuantity(index, $event.target.value)" />
                    </td>
                    <td>{{ item.price * item.quantity }}</td>
                    <td v-if="!showingOrderForm">
                        <button @click="removeItem(item.id)">移除</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <p v-if="!items.length">購物車是空的</p>
    </div>
</template>

<script>
export default {
    name: 'cartComponent',
    props: {
        items: {
            type: Array,
            required: true,
        },
        showingOrderForm: {
            type: Boolean,
            required: true,
        },
    },
    methods: {
        updateQuantity(index, quantity) {
            const parsedQuantity = parseInt(quantity, 10);
            if (isNaN(parsedQuantity) || parsedQuantity < 1) return;
            this.$emit('updateItem', { index, quantity: parsedQuantity });
        },
        removeItem(index) {
            this.$emit('removeItem', index);
        },
    },
};
</script>

<style scoped>
.cart {
    width: 100%;
}

.cart-items {
    width: 100%;
    border-collapse: collapse;
}

.cart-items th,
.cart-items td {
    border: 1px solid #ccc;
    padding: 0.5rem;
    text-align: left;
}

input[type='number'] {
    width: 60px;
}
</style>
