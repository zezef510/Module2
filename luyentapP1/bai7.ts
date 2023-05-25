class Product {

    constructor(public code: string, public name: string, public price: number, public quantity: number) {
        this.code = code;
        this.name = name;
        this.price = price;
        this.quantity = quantity
    }
}


class ProductManager {
    private listProduct: Product[] = [];

    addProduct(product: Product): void {
        this.listProduct.push(product);
    }

    updateProduct(code: string, newProduct: Product): void {
        const index = this.getProductIndex(code);

        if (index !== -1) {
            this.listProduct[index] = newProduct;
        }
    }

    deleteProduct(code: string): void {
        const index = this.getProductIndex(code);

        if (index !== -1) {
            this.listProduct.splice(index, 1);
        }
    }

    displayProducts(): void {
        console.log("Product List:");
        console.table(this.listProduct);
    }

    private getProductIndex(code: string): number {
        // @ts-ignore
        return this.listProduct.findIndex((product) => product.code === code);
    }
}

// Example usage:
const manager = new ProductManager();

manager.addProduct(new Product("P001", "Product 1", 1000, 10));
manager.addProduct(new Product("P002", "Product 2", 2000, 20));
manager.addProduct(new Product("P003", "Product 3", 3000, 30));

manager.displayProducts();

manager.updateProduct("P002", new Product("P002", "New Product 2", 2500, 25));

manager.displayProducts();

manager.deleteProduct("P003");

manager.displayProducts();

  