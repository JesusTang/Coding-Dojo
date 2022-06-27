from mimetypes import init
from unicodedata import name


class Tienda:
    nombre = 'Dojo Market'
    productList = []

    def __init__(self):

        pass

    def agregar_producto(self, nuevo_producto):
        pass
    def vender_producto(self, id):
        pass
    def inflacion(self, porcentaje_aumento):
        pass
    def hacer_liquidacion(self, category, porcentaje_descuento):
        pass

class Producto:

    def __init__(self, name, price, category) -> None:
        self.name = name
        self.price = price
        self.category = category

    def actualizar_precio(self, cambio_porcentaje, está_elevado):
        pass

    def print_info(self): 
        pass



