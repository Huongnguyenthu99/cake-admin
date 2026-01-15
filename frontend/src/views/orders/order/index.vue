<template>
    <div>
        <h2 class="font-semibold text-2xl mb-6">Đơn hàng</h2>
        <a-form ref="formRef" :model="formDonHang" layout="vertical" :rules="rules">
            <a-row gutter="16">
                <a-col span="12">
                    <a-form-item label="Họ tên" name="ten">
                        <a-input v-model:value="formDonHang.ten"></a-input>
                    </a-form-item>
                </a-col>
                <a-col span="12">
                    <a-form-item label="SĐT" name="sdt">
                        <a-input v-model:value="formDonHang.sdt"></a-input>
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row gutter="16">
                <a-col span="12">
                    <a-form-item label="Ngày lấy hàng" name="ngayLay">
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
            <order-items ref="refOrderItems" :dataSource="formDonHang.orderItems" />
        </a-form>
        <div>
            <a-button class="mt-4" type="primary" @click="handleCreate">Tạo đơn</a-button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { message } from 'ant-design-vue';

import OrderItems from './components/order-items.vue';
import { ngayLayOptions } from '@/utils/constants/options';
import { Order } from '@/api/order/model';
import { createOrder } from '@/api/order/api';
import { cloneDeep } from 'lodash-es';

const FORM_DEFAULT = {
    ten: '',
    sdt: '',
    diaChi: '',
    ghiChu: '',
    ngayLay: '',
    orderItems: [],
}
const rules = {
    ten: [{ required: true, message: 'Vui lòng nhập Họ tên' }],
    ngayLay: [{ required: true, message: 'Vui lòng nhập Ngày lấy' }],
};
const formDonHang = ref<Order>(cloneDeep(FORM_DEFAULT));

const refOrderItems = ref();
const formRef = ref();

const handleCreate = async () => {
    try {
        await formRef.value.validate();
        const orderItems = refOrderItems.value.getOrderItems();
        const params = {
            ...formDonHang.value,
            orderItems,
        }
        await createOrder(params);
        message.success('Tạo đơn thành công!');
        formDonHang.value = cloneDeep(FORM_DEFAULT);
        refOrderItems.value.resetForm();
    } catch (e) {
        console.log(e);
    }
}
</script>