<template>
  <div>
    <a-menu :items="menus" mode="horizontal" @click="handleMenuClick">
      <a-menu-item key="path"></a-menu-item>
    </a-menu>
    <div>
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useLoaiBanhStore } from './store/modules/loaiBanh';


const router = useRouter();

const menus = [
  {
    key: 'order',
    path: 'order',
    label: 'Đơn hàng',
    title: 'Đơn hàng',
  },
  {
    key: 'orderDetail',
    path: 'order-detail',
    label: 'Danh sách đơn hàng',
    title: 'Danh sách đơn hàng',
  },
  {
    key: 'production',
    path: 'production',
    label: 'Mẻ bánh',
    title: 'Mẻ bánh',
  },
]

const handleMenuClick = ({ item }: {item: {path: string}}) => {
  router.push(item.path);
}

const initDanhMuc = async () => {
  console.log("45455")
  await useLoaiBanhStore().fetch();
}

onMounted(() => {
  initDanhMuc();
})
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
