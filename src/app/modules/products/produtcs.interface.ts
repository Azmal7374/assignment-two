import { Document, Model } from 'mongoose';

export type TProductVariant = {
  type: string;
  value: string;
};

export type TProductInventory = {
  quantity: number;
  inStock: boolean;
};

export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TProductVariant[];
  inventory: TProductInventory;
}

export interface IProductModel extends Model<TProduct> {
  isProductExists(name: string): Promise<TProduct | null>;
}
