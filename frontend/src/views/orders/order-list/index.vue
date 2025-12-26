<template>
    <a-table :dataSource="dataSource" :columns="columns" rowKey="ngayDat" defaultExpandAllRows
        :row-class-name="(record: ProcductStock) => (record.children?.length > 0 ? 'table-striped' : null)">
        <template #summary>
            <a-table-summary-row>
                <a-table-summary-cell>Total</a-table-summary-cell>
                <a-table-summary-cell colspan="6">
                    <a-typography-text type="danger"></a-typography-text>
                </a-table-summary-cell>
            </a-table-summary-row>
        </template>
    </a-table>
</template>
<script setup lang="ts">
import { ProcductStock } from '@/api/product/model';
import { columns } from './const';


const dataSource: ProcductStock[] = [
    {
        ngayDat: "2025-09-25",
        tonDauNgay: 0,
        loaiBanh: "",
        slDat: 0,
        slDaGiao: 0,
        slCanGiao: 0,
        slDaLam: 0,
        tonKho: 0,
        children: [
            {
                ngayDat: "2025-09-25",
                tonDauNgay: 0,
                loaiBanh: "50K",
                slDat: 100,
                slDaGiao: 50,
                slCanGiao: 50,
                slDaLam: 50,
                tonKho: 0,
                children: []
            }
        ]
    },
    {
        ngayDat: "2025-09-26",
        tonDauNgay: 0,
        loaiBanh: "",
        slDat: 0,
        slDaGiao: 0,
        slCanGiao: 0,
        slDaLam: 0,
        tonKho: 0,
        children: [
            {
                ngayDat: "2025-09-26",
                tonDauNgay: 0,
                loaiBanh: "50K",
                slDat: 100,
                slDaGiao: 0,
                slCanGiao: 100,
                slDaLam: 0,
                tonKho: 0,
                children: []
            }
        ]
    }
];

</script>

<style>
.ant-table-tbody ::v-deep(.table-striped) td {
    background-color: #fafafa;
}
</style>