import DonHang from '@/views/orders/order/index.vue'
import OrderList from '@/views/orders/order-list/index.vue'
import ProductionList from '@/views/production/production-list/index.vue'

export const routes = [
  { path: '/order', component: DonHang },
  { path: '/order-detail', component: OrderList },
  { path: '/production', component: ProductionList },
]