#for bisa digunakan untuk mengiterasi list
list = ["haha","hehe","huhu"]

for i in list:
    print(i)

#range juga bisa digunakan dalam for
#range tidak menyimpan keseluruhan angka dari start sampai stop, seperti list. namun ia hanya akan mengembalikan nilai individual atau subrange tertentu saja yang dibutuhkan
#pada iterasi pertama i mengakses index - dari range(10), sehingga mengembalikan range(10)[0], yaitu 0. iterasi kedua mengakses index ke 1 berarti mengembalikan range(10)[1] dan seterusnya sampe stop-1
for i in range(10):
    print(i)

#untuk mendapatkan informasi mengenai index dari looping for suatu list dapat digunakan range dan len
listku = [4,True,"hehe","haha"]

for i in range(len(listku)):
    print(i)
    print(listku[i])

#string juga bisa digunakan falam for karena bisa diakses melewati index tiap karakternya
stringku = "stingku"
for chara in stringku:
    print(chara)

#while bisa menggunakan () atau menggunakan spasi untuk statement kondisinya agar memisahkan dengan while
j=0
while(j<10):
    print(j)
    j+=1

k=100
while k<110:
    print(k)
    k+=1