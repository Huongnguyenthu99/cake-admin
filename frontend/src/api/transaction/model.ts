export interface Transaction {
    id: string;
    productId: string;
    productionId: string;
    loaiBanh: string;
    soLuong: number;
    donGia: number;
    ghiChu?: string;
    trangThai: string;
}