
export interface IproductVariants {
    type: string;
    variant: string;
}

export interface IproductInventory {
    quantity: number;
    inStock?: boolean;
}

export interface Iproduct {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: IproductVariants[];
    inventory: IproductInventory;
}