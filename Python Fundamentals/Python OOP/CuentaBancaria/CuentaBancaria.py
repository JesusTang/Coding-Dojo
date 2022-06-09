class CuentaBancaria:

    todas_las_cuentas = []

    def __init__(self, balance = 0, tasa_interes = 0.01): 
        self.balance = balance
        self.tasa_interes = tasa_interes + 1
        CuentaBancaria.todas_las_cuentas.append(self)


    def depósito(self, amount):
        self.balance += amount
        return self

    def retiro(self, amount):
        self.balance -= amount
        return self

    def mostrar_info_cuenta(self):
        print(f'Balance: ${self.balance}')
        print(f'Esta cuenta tiene como tasa de interes {self.tasa_interes}')
        return self

    def generar_interés(self):
        self.balance = self.balance*self.tasa_interes
        return self

    @classmethod
    def showAllBalances(cls):
        for cuenta in cls.todas_las_cuentas:
            print(f'{cuenta} balance is: {cuenta.balance}')

Jesus = CuentaBancaria(500, 0.01)
Jose = CuentaBancaria(1000, 0.05)

Jesus.depósito(500).depósito(250).retiro(150).generar_interés().mostrar_info_cuenta()

Jose.depósito(2000).depósito(2500).retiro(690).retiro(200).retiro(300).retiro(150).generar_interés().mostrar_info_cuenta()

CuentaBancaria.showAllBalances()