import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

// 定义商品类型
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>("");

  // 获取商品数据
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");

      if (error) {
        setError(error.message);
        return;
      }

      setProducts(data || []);
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">商品列表</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow-lg hover:shadow-xl"
          >
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-green-600 font-semibold">¥ {product.price}</p>
            <p className="text-gray-500">分类: {product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
