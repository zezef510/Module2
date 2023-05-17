var Product = /** @class */ (function () {
    function Product(code, name, price, quantity) {
        this.code = code;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.code = code;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    return Product;
}());
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.listProduct = [];
    }
    ProductManager.prototype.addProduct = function (product) {
        this.listProduct.push(product);
    };
    ProductManager.prototype.updateProduct = function (code, newProduct) {
        var index = this.getProductIndex(code);
        if (index !== -1) {
            this.listProduct[index] = newProduct;
        }
    };
    ProductManager.prototype.deleteProduct = function (code) {
        var index = this.getProductIndex(code);
        if (index !== -1) {
            this.listProduct.splice(index, 1);
        }
    };
    ProductManager.prototype.displayProducts = function () {
        console.log("Product List:");
        console.table(this.listProduct);
    };
    ProductManager.prototype.getProductIndex = function (code) {
        // @ts-ignore
        return this.listProduct.findIndex(function (product) { return product.code === code; });
    };
    return ProductManager;
}());
// Example usage:
var manager = new ProductManager();
manager.addProduct(new Product("P001", "Product 1", 1000, 10));
manager.addProduct(new Product("P002", "Product 2", 2000, 20));
manager.addProduct(new Product("P003", "Product 3", 3000, 30));
manager.displayProducts();
manager.updateProduct("P002", new Product("P002", "New Product 2", 2500, 25));
manager.displayProducts();
manager.deleteProduct("P003");
manager.displayProducts();
