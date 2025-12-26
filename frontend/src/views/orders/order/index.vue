<template>
    <div>
        <h2 class="font-semibold text-2xl mb-6">Đơn hàng</h2>
        <a-form :model="formDonHang" layout="vertical">
            <a-row gutter="16">
                <a-col span="12">
                    <a-form-item label="Họ tên">
                        <a-input v-model:value="formDonHang.ten"></a-input>
                    </a-form-item>
                </a-col>
                <a-col span="12">
                    <a-form-item label="SĐT">
                        <a-input v-model:value="formDonHang.sdt"></a-input>
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row gutter="16">
                <a-col span="12">
                    <a-form-item label="Ngày lấy hàng">
                        <a-select v-model:value="formDonHang.ngayLay" :options="ngayLayOptions"></a-select>
                    </a-form-item>
                </a-col>
                <a-col span="12">
                    <a-form-item label="Địa chỉ">
                        <a-input v-model:value="formDonHang.diaChi"></a-input>
                    </a-form-item>
                </a-col>
                <a-col span="24">
                    <a-form-item label="Ghi chú">
                        <a-input v-model:value="formDonHang.ghiChu"></a-input>
                    </a-form-item>
                </a-col>
            </a-row>
            <order-items v-model:dataSource="formDonHang.orderItems" />
        </a-form>
        <div>
            <a-button class="mt-4" type="primary">Tạo đơn</a-button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

import OrderItems from './components/order-items.vue';
import { ngayLayOptions } from '@/utils/constants/options';
import { Order } from '@/api/order/model';

const formDonHang = ref<Order>({
    ten: '',
    sdt: '',
    diaChi: '',
    ghiChu: '',
    ngayLay: '',
    orderItems: [],
});
</script>