#fungsi diawali dengan def. dan menggunakan titik 2 ':' ketimbang menggunakan {} seperti dalam java/c/c++
#code yang dieksekusi didalam fungsi harus di indent, jika tidak maka akan dianggap diluar fungsi
#return dari fungsi python bisa berbagai tipe data, bisa number, string, boolean, dan sebagainya, meskipun berarti dalam 1 fungsi terdapat berbagai return tipe data yang berbeda
def hehe(nama):
    print("halo "+nama)

hehe("haris")

def cobaReturn(nama):
    return "halo "+nama

print(cobaReturn("haris2"))

#fungsi bisa recursive

def factorial(i):
    if(i==1 or i==0) :return 1
    return i*factorial(i-1)

print(factorial(5))

def returnBerbagaiTipeData(switch):
    if(switch==1): return 1
    if(switch==2): return "99"
    if(switch==3): return False

print(returnBerbagaiTipeData(2))

#fungsi yang tidak ada return-nya, akan mereturn None

def fungsiTanpaReturn():
    print()

print(fungsiTanpaReturn())