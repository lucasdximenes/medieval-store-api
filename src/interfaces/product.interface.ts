interface Product {
  id: number;
  name: string;
  amount: string;
  orderId: number | null;
}

interface CreatedProduct {
  id: number;
  name: string;
  amount: string;
}

interface CreateProduct {
  name: string;
  amount: string;
}

export { Product, CreatedProduct, CreateProduct };
