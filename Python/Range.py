#range bukanlah list, tetapi range merupakan class
#namun element dari range bisa diakses menggunakan index, oleh karena itulah bisa digunakan dalam for loop

# range ada start, stop, dan step. start adalah integer pertama dari urutan, stop adalah batas atas, namun stop tidak dimasukkan ke dalam urutan.
#d dan step adalah perbedaan antara 2 nilai yang berdekatan
print(range(0,10,2)[4])

#range bisa diubah menjadi list
print(list(range(0,12,4)))

#start default adalah 0, dan step adalah 1. sehingga cukup mendefinisikan stopnya saja
print(list(range(5)))

#menggunakan start
print(list(range(1,10)))

#range juga bisa menggunakan start, step, maupun stop negatif
print(list(range(-1,-11,-1)))

print(list(range(5,-1,-1)))

#range bisa diakses subrangenya, disini mengakses index 5 sampai ujung
print(list(range(-10,10,2)[3:]))

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