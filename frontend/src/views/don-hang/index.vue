<template>
    <!-- <div>Đây là trang đơn hàng</div> -->
    <a-form :model="formDonHang" layout="vertical">
        <a-row gutter="16">
            <a-col span="6">
                <a-form-item label="Họ tên">
                    <a-input></a-input>
                </a-form-item>
            </a-col>
            <a-col span="6">
                <a-form-item label="SĐT">
                    <a-input></a-input>
                </a-form-item>
            </a-col>
            <a-col span="12">
                <a-form-item label="Địa chỉ">
                    <a-input></a-input>
                </a-form-item>
            </a-col>
        </a-row>
        <a-row>
            <a-col span="24">
                <a-form-item label="Ghi chú">
                    <a-textarea></a-textarea>
                </a-form-item>
            </a-col>
        </a-row>
        <table-cake />
    </a-form>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import TableCake from './components/table.vue';

const formDonHang = ref();
</script>