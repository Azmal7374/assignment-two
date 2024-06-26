import { Request, Response } from 'express';
import { ProductService } from './products.service';
import productValidationSchema from './product.joi.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    //   console.log(productData)

    const { error, value } = productValidationSchema.validate(productData);

    const result = await ProductService.createProductIntoDB(value);

    if (error) {
      res.status(500).json({
        success: false,
        message: 'You Are Wrong Data Validation',
        error: error.details,
      });
    }

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (err ) {
    res.status(400).json({
      success: false,
      message:'Something went wrong',
      error: err,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    const result = await ProductService.getAllProductsFromDB( searchTerm);

    res.status(200).json({
      success: true,
      message: 'Products Fetched successfully',
      data: result,
    });
  } catch (err ) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    console.log(productId);
    const result = await ProductService.getSingleProductFromDB(productId);
    // console.log(result.length);

    if (result.length > 0) {
      res.status(200).json({
        success: true,
        message: 'Product fetched successfully!',
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Product not found! Because Product Item Less Than 0',
      });
    }
  } catch (err ) {
    res.status(500).json({
      success: false,
      message:'Something went wrong',
      error: err,
    });
  }
};

const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateProduct = req.body;

    const result = await ProductService.updateSingleProductFromDB(
      productId,
      updateProduct,
    );

    if (result) {
      res.status(200).json({
        success: true,
        message: 'This Product Updated Successfullt!',
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message:
          'This Product Not Update Because you are not allowed to update!',
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server Error because your implementation is wrong',
    });
  }
};

const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.deleteProductFromDB(productId);

     if (result) {
      res.status(200).json({
        success: true,
        message: "Product deleted  successfully!",
        data: null,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Product not deleted!",
      });
    };
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};




export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
};
