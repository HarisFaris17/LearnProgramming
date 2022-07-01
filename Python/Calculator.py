num1 = float(input("Masukkan bilangan pertama : "))
operator = input("operator : ")
num2 = float(input("Masukkan bilangan kedua : "))

def calculator(num1, num2, operator):
    match operator:
        case 'x':
            return num1*num2
        case '/':
            return num1/num2
        case '+':
            return num1+num2
        case '-':
            return num1-num2
    return "operator tidak dimengerti"

print(calculator(num1,num2,operator))