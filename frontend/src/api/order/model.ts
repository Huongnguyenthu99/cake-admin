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
    productTypeId?: number;
    soLuong: number;
    donGia?: number;
    ghiChu?: string;
}