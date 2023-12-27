from faker import Faker
import random
import json


class LoginData:

    def __init__(self):
        fake = Faker()
        self.email = fake.email()
        self.username = fake.first_name()
        self.first_name = fake.first_name()
        self.last_name = fake.last_name()
        self.phone = random.randint(9000000000, 9999999999)
        self.city = fake.city()

    def get_json(self):
        p = {
            'email': self.email,
            'username': self.first_name,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'phone': self.phone,
            'city': self.city,
        }
        return json.dumps(p)



def input_data(x):
    for i in range(0, x):
        logindata = LoginData()
        print(logindata.get_json())


def main():
    no_of_input = 5
    input_data(no_of_input)


main()