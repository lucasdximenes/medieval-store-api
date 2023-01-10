export interface Order {
  id: number;
  userId: number;
  productsIds: number[];
}

export interface NewOrder {
  userId: number;
  productsIds: number[];
}
