<template>
    <div class="">
        <div class="flex justify-between mb-2">
            <span>Danh sách</span>
            <a-button @click="handleAdd">Thêm</a-button>
        </div>
        <a-table :columns="columns" :data-source="dataSource" bordered :scroll="{ y: 300}">
            <template #bodyCell="{text, record, column}">
                <template v-if="column.dataIndex === 'action'">
                    <a @click="handleEdit(record)">Sửa</a>
                </template>
                <template v-else>
                    <a-input v-if="record.isEdit" v-model:value="record[column.dataIndex]">
                    </a-input>
                    <div v-else>{{ text }}</div>
                </template>
            </template>
        </a-table>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';


const columns = [
    {
        title: 'Loại bánh',
        dataIndex: 'type',
    },
    {
        title: 'Giá tiền',
        dataIndex: 'price',
    },
    {
        title: 'Số lượng',
        dataIndex: 'amount',
    },
    {
        title: '',
        dataIndex: 'action',
    }
]
const dataSource = ref([]);

const handleAdd = () => {
    const newData = {
        type: 1,
        price: 1,
        amount: 1,
        isEdit: true,
    };
    dataSource.value.push(newData)
}

const handleEdit = (record) => {

}
</script>