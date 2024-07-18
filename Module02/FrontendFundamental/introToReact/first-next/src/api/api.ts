import axios from "axios";

export const BASE_URL = "http://localhost:4000/";

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  image?: any;
  price: number;
  category: string;
}

export const getProducts = async (): Promise<ProductItem[]> => {
  try {
    const response = await axios.get(BASE_URL + "products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
};

export const getProductById = async (id: string): Promise<ProductItem> => {
  try {
    const response = await axios.get(BASE_URL + `products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw new Error("Failed to fetch product by ID");
  }
};

export const postProducts = async (data: ProductItem): Promise<ProductItem> => {
  const body: ProductItem = {
    id: data?.id,
    name: data.name,
    description: data.description,
    price: data.price,
    image: data.image,
    category: data.category,
  };
  try {
    const response = await axios.post(BASE_URL + "products", body);
    return response.data;
  } catch (error) {
    console.error("Error posting product:", error);
    throw new Error("Failed to post product");
  }
};

export const editProducts = async (
  data: ProductItem,
  id: string
): Promise<ProductItem> => {
  const body = {
    name: data.name,
    description: data.description,
    price: data.price,
    image: data.image,
    category: data.category,
  };
  try {
    const response = await axios.put(BASE_URL + `products/${id}`, body);
    return response.data;
  } catch (error) {
    console.error("Error editing product:", error);
    throw new Error("Failed to edit product");
  }
};

export const deleteProducts = async (id: string): Promise<void> => {
  try {
    await axios.delete(BASE_URL + `products/${id}`);
  } catch (error) {
    console.error("Error deleting product:", error);
    throw new Error("Failed to delete product");
  }
};
