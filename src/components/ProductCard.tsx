"use client";

import { Product } from '@/types/product';
import { useCartStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="group relative">
      <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
      </div>
      <Button
        onClick={() => addItem(product)}
        className="mt-2 w-full"
        variant="outline"
      >
        Add to Cart
      </Button>
    </div>
  );
}