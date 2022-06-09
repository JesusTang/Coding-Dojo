class CuentaBancaria:

    todas_las_cuentas = []

    def __init__(self, balance = 0, tasa_interes = 0.01): 
        self.balance = balance
        self.tasa_interes = tasa_interes + 1
        CuentaBancaria.todas_las_cuentas.append(self)


    def depósito(self, amount):
        self.balance += amount

    def retiro(self, amount):
        self.balance -= amount

    def mostrar_info_cuenta(self):
        print(f'Balance: ${self.balance}')
        print(f'Esta cuenta tiene como tasa de interes {self.tasa_interes}')

    def generar_interés(self):
        self.balance = self.balance*self.tasa_interes

    @classmethod
    def showAllBalances(cls):
        for cuenta in cls.todas_las_cuentas:
            print(f'{cuenta} balance is: {cuenta.balance}')

class Usuario:
    def __init__(self, name, email, balance):
        self.name = name
        self.email = email
        self.cuenta = CuentaBancaria(balance = 0, tasa_interes = 0.01)
        self.cuenta.balance = balance

    def depósito(self, amount):
        self.cuenta.depósito(amount)
        return self

    def retiro(self, amount):
        self.cuenta.retiro(amount)
        return self

    def mostrar_info_cuenta(self):
        print(f'{self.name} balance is: ${self.cuenta.balance}')
        print(f'{self.name} tiene como tasa de interes: {self.cuenta.tasa_interes}')
        return self

    def generar_interés(self):
        self.cuenta.balance = self.cuenta.balance*self.cuenta.tasa_interes
        return self


# Jesus = CuentaBancaria(500, 0.01)
# Jose = CuentaBancaria(1000, 0.05)


# Jose.depósito(2000).depósito(2500).retiro(690).retiro(200).retiro(300).retiro(150).generar_interés().mostrar_info_cuenta()

# CuentaBancaria.showAllBalances()

Jesus = Usuario('Jesus Tang', 'jesutang3@gmail.com', 4356)

Jesus.depósito(500).depósito(250).retiro(150).generar_interés().mostrar_info_cuenta()