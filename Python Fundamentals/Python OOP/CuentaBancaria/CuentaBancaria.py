class CuentaBancaria:

    todas_las_cuentas = []
    # ¡No olvides agregar algunos valores predeterminados para estos parámetros!
    def __init__(self, balance = 0, tasa_interes = 0.1): 
        self.balance = balance
        self.tasa_interes = tasa_interes
        CuentaBancaria.todas_las_cuentas.append(self)

        # tu código aquí (recuerda, los atributos de instancia van aquí)
    # no te preocupes por la información del usuario aquí; pronto involucraremos la clase de usuario
    def depósito(self, amount):
        self.balance += amount
    # tu código aquí
    def retiro(self, amount):
        self.balance -= amount
    # tu código aquí
    def mostrar_info_cuenta(self):
        print(f'Balance: ${self.balance}')
    @classmethod
    def showAllBalances(cls):
        for cuenta in cls.todas_las_cuentas:
            print(f'{cuenta} balance is: {cuenta.balance}')

    def generar_interés(self):
        self.balance = self.balance*self.tasa_interes
    # tu código aquí

Jesus = CuentaBancaria(500, )
Jose = CuentaBancaria(1000, )
Jesus.mostrar_info_cuenta()

CuentaBancaria.showAllBalances()