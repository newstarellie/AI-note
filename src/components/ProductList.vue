<template>
    <div class="product-list">
        <div class="products">
            <ProductItem v-for="(product, index) in products" :key="index" :product="product" @addToCart="addToCart" />
        </div>
    </div>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
    components: {
        ProductItem,
    },
    props: {
        products: {
            type: Array,
            required: true,
        },
    },
    methods: {
        addToCart(product) {
            this.$emit('addToCart', product);
        },
    },
};
</script>

<style scoped>
.product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.products {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>
