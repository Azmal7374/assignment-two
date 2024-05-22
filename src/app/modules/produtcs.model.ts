import { Schema, model } from 'mongoose';
import { TProduct, IProductModel } from './products/produtcs.interface';

const productVariantSchema = new Schema({
  type: { type: String, },
  value: { type: String},
});

const productInventorySchema = new Schema({
  quantity: { type: Number, },
  inStock: { type: Boolean, },
});

const productSchema = new Schema<TProduct, IProductModel>({
  name: { type: String, required: true, unique: true },
  description: { type: String, },
  price: { type: Number, },
  category: { type: String, },
  tags: { type: [String], },
  variants: { type: [productVariantSchema], },
  inventory: { type: productInventorySchema, },
}, {
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  },
});

// Static method to check if product exists by name
productSchema.statics.isProductExists = async function(name: string) {
  return await this.exists({ name });
};

export const Product = model<TProduct, IProductModel>('Product', productSchema);
