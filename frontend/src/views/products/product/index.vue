<template>
    <a-form :model="formProduct" layout="vertical">
        <a-row gutter="16">
            <a-col span="12">
                <a-form-item label="Ngày gói hàng">
                    <a-input v-model:value="formProduct.ngayGoi"></a-input>
                </a-form-item>
            </a-col>
            <a-col span="12">
                <a-form-item label="Giờ nấu">
                    <a-input v-model:value="formProduct.gioNau" type="number"></a-input>
                </a-form-item>
            </a-col>
        </a-row>
        <a-row gutter="16">
            <a-col span="24">
                <a-form-item label="Giờ vớt bánh">
                    <a-date-picker v-model:value="formProduct.description" rows="4"></a-date-picker>
                </a-form-item>
            </a-col>
        </a-row>
        <product-items v-model:dataSource="formProduct.items" />
    </a-form>
</template>
<script setup lang="ts">
import { ref } from "vue";

import { Product } from "@/api/product/model";

import ProductItems from "./components/product-items.vue";

const formProduct = ref<Product>({
    gioNau: "",
    gioVotBanh:"",
    ghiChu: "",
    items: [],
});
</script>