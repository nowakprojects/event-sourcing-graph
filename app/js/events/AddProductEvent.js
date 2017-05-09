const Product = require('../models/Product');

class AddProductEvent {
    constructor(catalog, productId, productName, productPrice, productVisible, productColor) {
        this.catalog = catalog;
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productVisible = productVisible;
        this.productColor = productColor;
        this.name = 'AddProductEvent';
    }

    process() {
        this.catalog.addProduct(new Product(this.productId, this.productName,
            this.productPrice, this.productVisible, this.productColor));
    }
}

module.exports = AddProductEvent;