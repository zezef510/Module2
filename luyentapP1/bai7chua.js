// @ts-ignore
var readlineSync = require('readline-sync');
var Product = /** @class */ (function () {
    function Product(id, name, price, amount) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
    Product.prototype.getI4 = function () {
        console.log('Name: ' + this.name + ', id: ' + this.id);
    };
    return Product;
}());
var ManageProduct = /** @class */ (function () {
    function ManageProduct() {
        this.listProduct = [];
    }
    ManageProduct.prototype.add = function (product) {
        this.listProduct.push(product);
    };
    ManageProduct.prototype.edit = function (id, product) {
        for (var i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].id === id) {
                this.listProduct[i] = product;
            }
        }
    };
    ManageProduct.prototype.delete = function (id) {
        this.listProduct = this.listProduct.filter(function (item) { return item.id !== id; });
    };
    ManageProduct.prototype.timKiemCoAKo = function (name) {
        // @ts-ignore
        return this.listProduct.filter(function (p) { return p.name.includes(name); });
    };
    ManageProduct.prototype.timKiemSPA = function (name) {
        // @ts-ignore
        return this.listProduct.find(function (p) { return p.ten === name; });
    };
    ManageProduct.prototype.demSP = function (price) {
        return this.listProduct.reduce(function (total, p) { return (p.price > price ? total + 1 : total); }, 0);
    };
    ManageProduct.prototype.show = function () {
        console.table(this.listProduct);
    };
    return ManageProduct;
}());
var name111 = readlineSync.question('Nhập vào tên đi: ');
var id2 = readlineSync.question('Nhập vào id đi: ');
var a = new Product(name111, id2, 2, 5);
a.getI4();
// mp.add(new Product('1', 'IP', 1000, 10));
// mp.add(new Product('2', 'SS', 2000, 50));
// mp.show();
// mp.edit('2', new Product('3', 'SS', 2000, 50));
// mp.show();
// mp.delete('1')
// mp.show();
// mp.timKiemSPA(`1`)
// mp.show();
// mp.demSP(1000)
// mp.show();
// mp.timKiemCoAKo(`A`)
// mp.show();
