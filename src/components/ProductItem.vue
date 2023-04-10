<template>
    <div class="product-item">
        <img :src="product.image" :alt="product.name" />
        <div class="product-info">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <p>價格: {{ product.price }} 元</p>
            <button @click="addToCart">加入購物車</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'productItem',
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    methods: {
        addToCart() {
            this.$emit('addToCart', this.product);
        },
    },
};
</script>

<style scoped>
.product-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 1rem;
    margin-bottom: 1rem;
    width: 200px;
}

.product-info {
    text-align: center;
}

button {
    background-color: #0080ff;
    color: #fff;
    border: none;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0069d9;
}
</style>
