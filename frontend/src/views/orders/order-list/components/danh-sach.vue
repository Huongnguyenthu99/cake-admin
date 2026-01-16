<template>
    <div>
        <a-form :model="formSearch" :colon="false" layout="vertical">
            <a-row :gutter="15">
                <a-col span="6">
                    <a-form-item label="Ngày lấy hàng">
                        <a-select v-model:value="formSearch.ngayLay"></a-select>
                    </a-form-item>
                </a-col>
                <a-col span="6">
                    <a-form-item label="Trạng thái">
                        <a-select v-model:value="formSearch.trangThai"></a-select>
                    </a-form-item>
                </a-col>
                <a-col>
                    <a-form-item label=" ">
                        <a-space>
                            <a-button>
                                <template #icon>
                                    <ReloadOutlined />
                                </template>
                                Reload
                            </a-button>
                            <a-button type="primary">Tìm kiếm</a-button>
                        </a-space>
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
        <a-table :dataSource="dataSource" :columns="columns" rowKey="ngayDat" defaultExpandAllRows
            :row-class-name="(record: ProductStock) => (record.children?.length > 0 ? 'table-striped' : null)">
            <template #summary>
                <a-table-summary-row>
                    <a-table-summary-cell>Total</a-table-summary-cell>
                    <a-table-summary-cell colspan="6">
                        <a-typography-text type="danger"></a-typography-text>
                    </a-table-summary-cell>
                </a-table-summary-row>
            </template>
             <template #bodyCell="{ record, column }">
                <a v-if="column.dataIndex === 'action'" @click="handleDetail(record.id)">Xem chi tiết</a>
             </template>
        </a-table>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ReloadOutlined } from '@ant-design/icons-vue'

import { ProductStock } from '@/api/product/model';
import { columns } from '../const';
import { getListOrder } from '@/api/order/api';

const emits = defineEmits(["detail"])

const dataSource = ref([]);

const formSearch = ref({
    ngayLay: undefined,
    trangThai: undefined
});

const handleDetail = (id: string) => {
    emits("detail", id)
}

onMounted(async () => {
    const res = await getListOrder({});
    dataSource.value = res;
})
</script>

<style>
.ant-table-tbody ::v-deep(.table-striped) td {
    background-color: #fafafa;
}
</style>