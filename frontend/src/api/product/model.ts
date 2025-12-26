export interface Product {
    ngayGoi: string;
    id: string;
    gioNau: string;
    gioVotBanh: string;
    ghiChu?: string;
    productItems: ProductItem[];
}

export interface ProcductStock {
    ngayDat: string;
    tonDauNgay: number;
    loaiBanh: string;
    slDat: number;
    slDaGiao: number;
    slCanGiao: number;
    slDaLam: number;
    tonKho: number;
    children: ProcductStock[];
}