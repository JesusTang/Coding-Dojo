class User:

    def __init__(self, name, mail) -> None:
        self.name = name 
        self.mail = mail
        self.balance = 0

    def hacer_deposito(self, monto):
        self.balance += monto
        print(self.name, 'deposito $',monto)


    def hacer_retiro(self, monto):
        self.balance -= monto
        print(self.name, 'retiro $',monto)

    def transfer_dinero(self, destinatario, monto):
        self.balance -= monto
        destinatario.balance += monto
        print(self.name, 'transfirio $',monto, 'a', destinatario.name)


    def mostrar_balance_usuario(self):
        print(self.name, 'tiene $',self.balance)


Jesus = User('Jesus', 'jesutang3@gmail.com')
Miguel = User('Miguel', 'migueltang3@gmail.com')
Jose = User('Jose', 'jctangsopan@gmail.com')



Jesus.hacer_deposito(500)
Jesus.hacer_deposito(300)
Jesus.hacer_deposito(200)
Jesus.transfer_dinero(Miguel, 230)

print('/*'*10)

Jesus.mostrar_balance_usuario()
Miguel.mostrar_balance_usuario()
Jose.mostrar_balance_usuario()

print('/*'*10)

Miguel.hacer_deposito(500)
Miguel.hacer_deposito(175)
Miguel.transfer_dinero(Jose, 200)
Miguel.transfer_dinero(Jesus, 120)

print('/*'*10)

Jesus.mostrar_balance_usuario()
Miguel.mostrar_balance_usuario()
Jose.mostrar_balance_usuario()

print('/*'*10)

Jose.hacer_deposito(2500)
Jose.transfer_dinero(Miguel, 867)
Jose.transfer_dinero(Miguel, 652)
Jose.transfer_dinero(Jesus, 1000)

print('/*'*10)

Jesus.mostrar_balance_usuario()
Miguel.mostrar_balance_usuario()
Jose.mostrar_balance_usuario()
