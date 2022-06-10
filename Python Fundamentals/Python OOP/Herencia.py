class CuentaBancaria:
    def __init__(self, tasa_interés, balance=0):
        self.tasa_interés = tasa_interés
        self.balance = balance

    def retiro(self, amount):
        if (self.balance - amount) > 0:
            self.balance -= amount
        else:
            print("FONDOS INSUFICIENTES")
        return self



class CuentaVitalicia(CuentaBancaria):
    def __init__(self, tasa_interés, cuenta_ira, balance=0,):
        super().__init__(tasa_interés, balance)
        self.cuenta_ira = cuenta_ira

    def retiro(self, amount, es_temprano):
        if es_temprano:
            amount = amount * 1.10
        super().retiro(amount)
        return self

John = CuentaVitalicia(1.01, True, 10000)


