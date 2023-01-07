interface CreateProduct {
  name: string;
  amount: string;
}

interface CreatedProduct extends CreateProduct {
  id: number;
}

interface Product extends CreatedProduct {
  orderId: number | null;
}

export { Product, CreatedProduct, CreateProduct };
