class CuentaBancaria:
    nombre_banco = "DojoBank"
    todas_las_cuentas = []  

    def __init__(self, name, mail) -> None:
        self.name = name 
        self.mail = mail
        self.balance = 0
        CuentaBancaria.todas_las_cuentas.append(self)


    def hacer_deposito(self, monto):
        self.balance += monto
        print(self.name, 'deposito $',monto)
        return self

    def hacer_retiro(self, monto):
        self.balance -= monto
        print(self.name, 'retiro $',monto)
        return self

    def transfer_dinero(self, destinatario, monto):
        self.balance -= monto
        destinatario.balance += monto
        print(self.name, 'transfirio $',monto, 'a', destinatario.name)
        return self

    def mostrar_balance_usuario(self):
        print(self.name, 'tiene $',self.balance)
        return self

    @classmethod
    def showAllBalances(cls):
        for cuenta in cls.todas_las_cuentas:
            print(f'{cuenta.name} balance is: {cuenta.balance}')


Jesus = CuentaBancaria('Jesus', 'jesutang3@gmail.com')
Miguel = CuentaBancaria('Miguel', 'migueltang3@gmail.com')
Jose = CuentaBancaria('Jose', 'jctangsopan@gmail.com')



Jesus.hacer_deposito(500).hacer_deposito(300).hacer_deposito(200).transfer_dinero(Miguel, 230)

print('/*'*10)

CuentaBancaria.showAllBalances()

print('/*'*10)

Miguel.hacer_deposito(500).hacer_deposito(175).transfer_dinero(Jose, 200).transfer_dinero(Jesus, 120)

print('/*'*10)

CuentaBancaria.showAllBalances()

print('/*'*10)

Jose.hacer_deposito(2500).transfer_dinero(Miguel, 867).transfer_dinero(Miguel, 652).transfer_dinero(Jesus, 1000)

print('/*'*10)

CuentaBancaria.showAllBalances()
