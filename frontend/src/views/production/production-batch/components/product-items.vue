<template>
    <div class="">
        <div class="flex justify-between mb-2">
            <span>Danh sách bánh</span>
            <a-button @click="handleAdd">Thêm</a-button>
        </div>
        <a-table rowKey="id" :columns="columns" :data-source="dataSourceForm" bordered :scroll="{ y: 300 }">
            <template #bodyCell="{ text, record, column }">
                <template v-if="column.dataIndex === 'action'">
                    <a @click="handleRemove(record)">Xóa</a>
                </template>
                <template v-else>
                    <div v-if="mode === MODE.VIEW">{{ text }}</div>
                    <a-input v-else v-model:value="record[column.dataIndex]" />
                </template>
            </template>
        </a-table>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';

import { MODE } from '@/utils/constants/constants';

import { ProductItem } from '@/api/product/model';

const props = defineProps<{
    mode?: string,
    dataSource: ProductItem[]
}>();

const emits = defineEmits(['update:dataSource']);

const columns = [
    {
        title: 'Loại bánh',
        dataIndex: 'type',
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
const dataSourceForm = computed({
    get() {
        return props.dataSource || [];
    },
    set(value) {
        emits('update:dataSource', value);
    }
});

const handleAdd = () => {
    const newData: ProductItem = {
        uuid: Math.random().toString(36).substring(2, 9),
        productId: '',
        productName: '',
        soLuong: 1,
    };
    dataSourceForm.value = [...dataSourceForm.value, newData];
}

const handleRemove = (record: ProductItem) => {
    dataSourceForm.value = dataSourceForm.value.filter(item => item.uuid !== record.uuid);
}
</script>