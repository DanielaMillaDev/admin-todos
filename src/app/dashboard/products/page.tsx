import { ProductCard } from "@/products";
import { products } from '../../../data/products';

export default function ProductsPage() {
  return (
    <div className="grid grif-cols-1 sm:grid-cols-3 gap-2">

    {
        products.map((product)=>(
            <ProductCard key={product.id} 
                        id={product.id} 
                        name={product.name} 
                        price={product.price} 
                        rating={product.rating} 
                        image={product.image}/>
        ))
    }
      
    </div>
  );
}