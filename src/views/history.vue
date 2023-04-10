<template>
  <div class="history-container">
    <h2>订单历史</h2>
    <div class="history-list">
      <table class="history-table">
        <thead>
          <tr>
            <th v-for="(field, key) in tableFields" :key="key" :style="{ width: field.width }">{{ field.title }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order, index) in orderList" :key="index">
            <td>{{ order.orderInfo.orderCreatedTime }}</td>
            <td>{{ order.clientInfo.name }}</td>
            <td>{{ order.clientInfo.address }}</td>
            <td>{{ order.clientInfo.email }}</td>
            <td>
              <img :src="item.image" alt="商品图片" v-for="(item, i) in order.orderInfo.cartItems" :key="i" />
            </td>
            <td>
              <div v-for="(item, i) in order.orderInfo.cartItems" :key="i">
                <h5 class="cart-item-name">{{ item.name }}</h5>
              </div>
            </td>
            <td>
              <div v-for="(item, i) in order.orderInfo.cartItems" :key="i">
                <p class="cart-item-quantity">{{ item.quantity }}</p>
              </div>
            </td>
            <td>
              <div v-for="(item, i) in order.orderInfo.cartItems" :key="i">
                <p class="cart-item-price">{{ item.price }}</p>
              </div>
            </td>
            <td>
              <div v-for="(item, i) in order.orderInfo.cartItems" :key="i">
                <p class="cart-item-description">{{ item.description }}</p>
              </div>
            </td>
            <td>{{ order.orderInfo.totalPrice }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { DateTime } from 'luxon';

export default {
  name: 'historyPage',
  computed: {
    // todo 建立資料 
    ...mapState("order", ["orderList"]),
    tableFields() {
      return {
        orderCreatedTime: { title: "订单日期", width: "100px" },
        clientName: { title: "客户姓名", width: "150px" },
        clientAddress: { title: "客户地址", width: "200px" },
        clientEmail: { title: "客户邮箱", width: "200px" },
        productImage: { title: "商品图片", width: "100px" },
        productName: { title: "商品名称", width: "200px" },
        productQuantity: { title: "商品数量", width: "100px" },
        productPrice: { title: "商品单价", width: "100px" },
        productDescription: { title: "商品描述", width: "200px" },
        totalPrice: { title: "订单总价", width: "100px" }
      }
    },
  },
  created() {
    // 获取历史订单数据，可以使用 Vuex 等状态管理工具，也可以通过接口请求等方式从后端获取
    // 此处仅为示例
    this.$store.dispatch("order/getDataFromFirebase");
  },
  filters: {
    formatDateTime(datetime) {
      return DateTime.fromISO(datetime).toFormat('yyyy-MM-dd HH:mm');
    }
  }
};
</script>

<style scoped>
/* 样式省略 */
</style>
