



const Carrito = require("../Carrito");

describe("Pruebas del carrito de compras", () => {

    test("Debe agregar un producto", () => {
        const carrito = new Carrito();

        carrito.agregarProducto({
            nombre: "Teclado",
            precio: 1000,
            cantidad: 1
        });

        expect(carrito.consultarCarrito().length).toBe(1);
    });

    test("Debe consultar los productos", () => {
        const carrito = new Carrito();

        carrito.agregarProducto({
            nombre: "Mouse",
            precio: 500,
            cantidad: 2
        });

        expect(carrito.consultarCarrito()[0].nombre).toBe("Mouse");
    });

    test("Debe eliminar un producto", () => {
        const carrito = new Carrito();

        carrito.agregarProducto({
            nombre: "Teclado",
            precio: 1000,
            cantidad: 1
        });

        carrito.eliminarProducto("Teclado");

        expect(carrito.consultarCarrito().length).toBe(0);
    });

    test("Debe calcular el total de la compra", () => {
        const carrito = new Carrito();

        carrito.agregarProducto({
            nombre: "Mouse",
            precio: 500,
            cantidad: 2
        });

        expect(carrito.calcularTotal()).toBe(1000);
    });

    test("No debe aceptar cantidades negativas", () => {
        const carrito = new Carrito();

        expect(() => {
            carrito.agregarProducto({
                nombre: "Teclado",
                precio: 1000,
                cantidad: -1
            });
        }).toThrow("Cantidad o precio inválido");
    });

});


