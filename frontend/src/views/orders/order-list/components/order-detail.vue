<template>
    <div class="flex flex-col">
        <div>Chi tiết đơn hàng</div>
        <InboxOutlined class="text-6xl my-16" />
        <div class="text-center">
            <div class="text-gray-500">Chọn một đơn hàng để xem chi tiết</div>
            <div>Click vào danh sách bên trái</div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { InboxOutlined } from '@ant-design/icons-vue';
import { watch } from 'vue';

const props = defineProps<{
    id: number;
}>();

watch(() => props.id, () => {
    // const res = /
})
</script>