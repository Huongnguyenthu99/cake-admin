export interface Order {
    id?: string;
    ten: string;
    sdt: string;
    diaChi: string;
    trangThai?: string;
    ngayLay: string;
    orderItems: OrderItem[];
    createDate?: string;
    ghiChu?: string;
}

export interface OrderItem {
    uuid?: string;
    orderId?: string;
    productId?: string;
    soLuong: number;
    donGia?: string;
    ghiChu?: string;
}