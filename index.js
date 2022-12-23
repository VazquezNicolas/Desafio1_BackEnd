const products = [];

class ProductManager {

    static id = 1;
    constructor ( title, description, price, thumbnail, code, stock ) {
        this.title = title;
        this.description = description;
        this.price = price;
        this. thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
        ProductManager.id;
    }
    addProduct() {
        const product = ({
            title: this.title,
            description: this.description,
            price: this.price,
            thumbnail: this.thumbnail,
            code: this.code,
            stock: this.stock,
            id: ProductManager.id
        })
    
        const check = products.find(e => e.code === product.code)

        if(check == true){
            console.log("error");
        }else {
            products.push(product);
            ProductManager.id++;
        }

        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            console.log("Complete todos los campos");
        }
    }
}

    const getProducts = () => { //Retornar todos los productos
        console.log(products)
    }

    const getProductsById = (id) => { //retornar todos los productos que cuente este id
        const busqueda = products.find(product => product.id === id)

        if (busqueda == undefined){
            console.log("not found")
        }else {
            console.log(busqueda)
        }
    }

    const product1 = new ProductManager("Siempre Listo", "Pasapañuelos", "$500", "imgRout", 1456, 10);
    const product2 = new ProductManager("Manada", "Pasapañuelos", "$700", "imgRout", 1856, 5);

    product1.addProduct();
    product2.addProduct();

    getProducts();