<template>
    <div class="">
        <div class="flex justify-between mb-2">
            <span>Danh sách bánh</span>
            <a-button @click="handleAdd">Thêm</a-button>
        </div>
        <a-table rowKey="id" :columns="columns" :data-source="dataSourceForm" bordered :scroll="{ y: 300, x: 1000 }">
            <template #bodyCell="{ text, record, column }">
                <template v-if="mode === MODE.VIEW">
                    <div>{{ text }}</div>
                </template>
                <template v-else>
                    <a v-if="column.dataIndex === 'action'" @click="handleRemove(record)">Xóa</a>
                    <div v-else-if="column.dataIndex === 'donGia'">
                        <a-input v-model:value="record[column.dataIndex]" readonly/>
                    </div>
                    <div v-else-if="column.dataIndex === 'productTypeId'">
                        <a-select v-model:value="record[column.dataIndex]" :options="optionsLoaiBanh" :fieldNames="{
                            label: 'loai',
                            value: 'id'
                        }" class="w-full" @change="handleChangeLoaiBanh(record)">
                        </a-select>
                    </div>
                    <a-input v-else v-model:value="record[column.dataIndex]" />
                </template>
            </template>
        </a-table>
    </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { omit } from 'lodash-es';

import { MODE } from '@/utils/constants/constants';
import { OrderItem } from '@/api/order/model';
import { useLoaiBanhStore } from '@/store/modules/loaiBanh';


const props = defineProps<{
    mode?: string,
    dataSource: OrderItem[]
}>();

const emits = defineEmits(['update:dataSource']);

const optionsLoaiBanh = computed(() => useLoaiBanhStore().getList);

const columns = [
    {
        title: 'Loại bánh',
        dataIndex: 'productTypeId',
    },
    {
        title: 'Giá tiền',
        dataIndex: 'donGia',

    },
    {
        title: 'Số lượng',
        dataIndex: 'soLuong',
    },
    {
        title: 'Ghi chú',
        dataIndex: 'ghiChu',
    },
    {
        title: '',
        dataIndex: 'action',
        width: 100,
    }
]
const dataSourceForm = ref<OrderItem[]>([]);

const handleAdd = () => {
    const newData: OrderItem = {
        uuid: Math.random().toString(36).substring(2, 9),
        soLuong: 1,
        donGia: undefined,
    };
    dataSourceForm.value = [...dataSourceForm.value, newData];
}

const handleRemove = (record: OrderItem) => {
    dataSourceForm.value = dataSourceForm.value.filter(item => item.uuid !== record.uuid);
}

const handleChangeLoaiBanh = (record: OrderItem) => {
    const loaiBanh = optionsLoaiBanh.value.find((item) => item.id === record.productTypeId);
    record.donGia = loaiBanh?.donGia;
}

const getOrderItems = () => {
    return dataSourceForm.value.map((item) => omit(item, ['uuid']));
}

const resetForm = () => {
    dataSourceForm.value = [];
}

defineExpose({ getOrderItems, resetForm })
</script>