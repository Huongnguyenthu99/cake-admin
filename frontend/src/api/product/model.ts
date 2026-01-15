export interface ProductionBatch {
  ngayGoi: string;
  id: string;
  gioNau: string;
  gioVotBanh: string;
  ghiChu?: string;
  trangThai?: string;
  producedItems: ProductItem[];
}
export interface ProductItem {
  id: string;
  productId: string;
  productName: string;
  soLuong: number;
  donGia: number;
  ghiChu?: string;
  uuid?: string;
}
export interface ProductStock {
  ngayDat: string;
  tonDauNgay: number;
  loaiBanh: string;
  slDat: number;
  slDaGiao: number;
  slCanGiao: number;
  slDaLam: number;
  tonKho: number;
  children: ProductStock[];
}

export interface ProductType {
  id: number;
  loai: string;
  donGia: number;
}
