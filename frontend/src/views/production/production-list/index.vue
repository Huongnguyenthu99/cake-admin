<template>
    <h2 class="font-semibold text-2xl mb-6">Danh sách mẻ bánh</h2>
    <a-table :columns="columns" :data-source="dataSource" row-key="id">
        <template #status="{ text }">
            <span v-if="text === '1'" style="color: orange;">Đang nấu</span>
            <span v-else-if="text === '2'" style="color: green;">Hoàn thành</span>
            <span v-else>{{ text }}</span>
        </template>
        <template #summary>
            <a-table-summary-row>
                <a-table-summary-cell :col-span="4">Total</a-table-summary-cell>
                <a-table-summary-cell :col-span="1" :align="'right'">{{ dataSource.length }}</a-table-summary-cell>
            </a-table-summary-row>
        </template>
    </a-table>
</template>
<script setup lang="ts">
import { TableColumnType } from 'ant-design-vue';

import { ProductionBatch } from '@/api/product/model';
import { onMounted } from 'vue';
import { getProduction } from '@/api/product/api';

const columns: TableColumnType<ProductionBatch>[] = [
    {
        key: 'ngayGoi',
        dataIndex: 'ngayGoi',
        title: 'Ngày gói',
    },
    {
        key: 'gioNau',
        dataIndex: 'gioNau',
        title: 'Giờ nấu',
    },
    {
        key: 'gioVotBanh',
        dataIndex: 'gioVotBanh',
        title: 'Giờ vớt bánh',
    },
    {
        key: 'trangThai',
        dataIndex: 'trangThai',
        title: 'Trạng thái',
        slots: { customRender: 'status' },
    },
    {
        key: 'soLuong',
        dataIndex: 'soLuong',
        title: 'Số lượng bánh',
        align: 'right'
    },
]

const dataSource: ProductionBatch[] = [
    {
        id: '1',
        ngayGoi: '2025-09-25',
        gioNau: '10:00',
        gioVotBanh: '12:00',
        trangThai: '1',
        soLuong: 100,
        producedItems: []
    },
    {
        id: '2',
        ngayGoi: '2025-09-26',
        gioNau: '11:00',
        gioVotBanh: '13:00',
        trangThai: '2',
        soLuong: 100,
        producedItems: []
    }
];

onMounted(async () => {
    const res = await getProduction({});
    console.log("🚀 ~ res:", res)
})
</script>