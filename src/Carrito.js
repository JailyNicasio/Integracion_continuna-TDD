
class Carrito {
    constructor() {
        this.productos = [];
    }

    // Agregar productos al carrito
    agregarProducto(producto) {
        if (producto.cantidad <= 0 || producto.precio < 0) {
            throw new Error("Cantidad o precio inválido");
        }

        this.productos.push(producto);
    }

    // Consultar productos
    consultarCarrito() {
        return this.productos;
    }

    // Eliminar productos por nombre
    eliminarProducto(nombre) {
        this.productos = this.productos.filter(
            producto => producto.nombre !== nombre
        );
    }

    // Calcular el total de la compra
    calcularTotal() {
        return this.productos.reduce(
            (total, producto) =>
                total + producto.precio * producto.cantidad,
            0
        );
    }

    // Vaciar el carrito
    vaciarCarrito() {
        this.productos = [];
    }
}

module.exports = Carrito;
