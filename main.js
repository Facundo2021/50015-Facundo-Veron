//1 Desafio Entregable de Backend

class ProductManager {
    //Variable estatica 
    static ultId = 0;


    //Array vacio. 
    constructor() {
        this.products = [];
    }

    //Métodos: 

    addProduct(title, description, price, img, code, stock) {
   
        //Valicion que se agregaron todos los campos: 
        if(!title || !description || !price || !img || !code || !stock){
            console.log("Todos los campos son obligatorios"); 
            return;
        }

        //Validacion que el código sea único: 
        if(this.products.some(item => item.code === code)){
            console.log("El codigo debe ser unico");
            return;
        }

        //Nuevo objeto con todos estos datos: 

        const newProduct = {
            id: ++ProductManager.ultId,
            title,
            description,
            price,
            img,
            code,
            stock
        }

        //Lo agrego al array: 

        this.products.push(newProduct);

    }

    getProducts() {
        console.log(this.products);
    }

    getProductById(id) {
        const product = this.products.find(item => item.id === id);

        if(!product) {
            console.log("Producto no encontrado");
        } else {
            console.log("Encontrado", product);
        }
        
    }


}



//testing: 

//1) Se creará una instancia de la clase “ProductManager”

const manager = new ProductManager();

//2) Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []

manager.getProducts();

//3) Se llamará al método “addProduct” con los campos:
//title: “producto prueba”
//description:”Este es un producto prueba”
//price:200,
//thumbnail:”Sin imagen”
//code:”abc123”,
//stock:25

manager.addProduct("producto prueba", "este es un producto prueba", 200, "sin imagen", "abc123", 25);


//4) El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE


manager.addProduct("pescado", "Mar", 250, "sin imagen", "abc124", 100);


manager.addProduct("Atun", "Bacalao", 300, "sin imagen", "abc125", 150);

//5)Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado

manager.getProducts();


//6) Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.

manager.addProduct("Atun", "Bacalao", 300, "sin imagen", "abc125", 150);

//7) Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo

manager.getProductById(2);
manager.getProductById(5);

