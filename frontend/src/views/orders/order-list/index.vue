<template>
    <div class="flex">
        <danh-sach class="w-3/4" @detail="(id) => orderId = id"/>
        <order-detail :id="orderId"/>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import DanhSach from './components/danh-sach.vue'
import orderDetail from './components/order-detail.vue';

const orderId = ref();

</script>

<style>
.ant-table-tbody ::v-deep(.table-striped) td {
    background-color: #fafafa;
}
</style>