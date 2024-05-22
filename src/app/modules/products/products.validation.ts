// import { z } from 'zod';

// const productVariantValidationSchema = z.object({
//   type: z.string().min(1, { message: 'Variant type is required' }),
//   value: z.string().min(1, { message: 'Variant value is required' }),
// });

// const productInventoryValidationSchema = z.object({
//   quantity: z.number()
//     .min(0, { message: 'Quantity must be at least 0' })
//     .int({ message: 'Quantity must be an integer' }),
//   inStock: z.boolean(),
// });

// const productValidationSchema = z.object({
//   name: z.string()
//     .min(1, { message: 'Product name is required' }),
//   description: z.string()
//     .min(1, { message: 'Product description is required' }),
//   price: z.number()
//     .min(0, { message: 'Price must be at least 0' }),
//   category: z.string()
//     .min(1, { message: 'Category is required' }),
//   tags: z.enum( ["smartphone", "Apple", "iOS"], { required_error: 'Tags is required' }),
//   variants: z.array(productVariantValidationSchema)
//     .min(1, { message: 'At least one variant is required' }),
//   inventory: productInventoryValidationSchema,
// });

// export { productValidationSchema };
