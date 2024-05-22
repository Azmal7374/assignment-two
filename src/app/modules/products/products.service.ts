import { Iproduct } from "./produtcs.interface";
import { ProductModel } from "./produtcs.model";



const createProductIntoDB = async (productData: Iproduct) => {
  const result = await ProductModel.create(productData);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductFromDB = async (_id: string) => {
  const result = await ProductModel.find({_id});
  return result;
};

const updateSingleProductFromDB = async(_id: string, updateProduct: Iproduct) => {
    const result = await ProductModel.findByIdAndUpdate({_id}, updateProduct,{
        new:true
    });
    return result;
}

const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.findByIdAndDelete(id);
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateSingleProductFromDB,
  deleteProductFromDB,
};
