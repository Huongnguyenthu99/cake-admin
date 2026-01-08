<template>
    <div>
        <h2 class="font-semibold text-2xl mb-6">Mẻ bánh</h2>
        <a-form :model="formProduct" layout="vertical">
            <a-row gutter="16">
                <a-col span="12">
                    <a-form-item label="Ngày gói hàng">
                        <a-select v-model:value="formProduct.ngayGoi" :options="ngayLayOptions"></a-select>
                    </a-form-item>
                </a-col>
                <a-col span="12">
                    <a-form-item label="Giờ nấu">
                        <a-input v-model:value="formProduct.gioNau"></a-input>
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row gutter="16">
                <a-col span="12">
                    <a-form-item label="Giờ vớt bánh">
                        <a-input v-model:value="formProduct.gioVotBanh"></a-input>
                    </a-form-item>
                </a-col>
            </a-row>
            <product-items v-model:dataSource="formProduct.producedItems" />
        </a-form>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

import { ProductionBatch } from "@/api/product/model";

import ProductItems from "./components/product-items.vue";
import { ngayLayOptions } from "@/utils/constants/options";

const formProduct = ref<ProductionBatch>({
    gioNau: "",
    gioVotBanh:"",
    ghiChu: "",
    producedItems: [],
    ngayGoi: "",
    id: "",
});
</script>