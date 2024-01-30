const productos = [
    { id: "1", nombre: "iPhone 13 PRO", precio: 550, img: "../img/iphone13pro.jpg", idCat: "1",stock: 2 },
    { id: "2", nombre: "iPhone 15 PRO MAX", precio: 1250, img: "../img/iphone15promax.jpg", idCat: "1", stock: 1  },
    { id: "3", nombre: "iPhone 14", precio: 670, img: "../img/iphone14.jpg", idCat: "1", stock: 4},
    { id: "4", nombre: "iPhone 15", precio: 940, img: "../img/iphone15.jpg", idCat: "1",stock: 3 },
    { id: "5", nombre: "Apple Watch SE", precio: 360, img: "../img/watchse.jpg", idCat: "2", stock: 1},
    { id: "6", nombre: "Apple Watch Series 8", precio: 720, img: "../img/watchseries8.jpg", idCat: "2", stock: 3 },
    { id: "7", nombre: "Apple Watch Series 9", precio: 900, img: "../img/watchseries9.jpg", idCat: "2", stock: 2 },
    { id: "8", nombre: "Apple Watch Ultra", precio: 820, img: "../img/watchultra.jpg", idCat: "2", stock: 2 },
    { id: "9", nombre: "Cargador 20W", precio: 50, img: "../img/cargador.jpg", idCat: "3", stock: 5 },
    { id: "10", nombre: "Apple Pencil", precio: 120, img: "../img/pencil.jpg", idCat: "3", stock: 3 },
    { id: "11", nombre: "Airpods PRO 2", precio: 350, img: "../img/airpodspro2.jpg", idCat: "3", stock: 5 },
    { id: "12", nombre: "Airpods PRO 3", precio: 220, img: "../img/airpods3.jpg", idCat: "3", stock: 5},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}