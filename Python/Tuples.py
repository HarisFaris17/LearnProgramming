#tupple seperti list, tetapi immutable, maksudnya adalah sekali nya didefinisikan maka tuple tidak bisa di modifikasi, ditambah, dihapus dan sebagainya
#tupple digunakan hanya pada kasus spesial saja yang mana dibutuhkan data yang tidak akan berubah

tuppleku = (1,2)

print(tuppleku)

#mengakses tupple bisa menggunakan index
print(tuppleku[1])

#error karena tupple immutable
# tuppleku[1]=12

#tupple juga bisa tanpa kurung

tupple_tanpa_kurung = 'a','ccccccc'

print(tupple_tanpa_kurung)

#jika definisikan 1 element dalam tupple maka akan dianggap sebagai variabel biasa
bukan_tupple_1_element = ('1 element')
print(bukan_tupple_1_element)

#jika ingin mendefinisikan 1 element dalam tupple, maka perlu koma

tupple_1_element = ('1 element tupple',)
print(tupple_1_element)

#sebenarnya kita bisa memasukkan tupple pada index operator '[]' (atau attribute __getitem__), namun bergantung apakah objek tersebut bisa menerima melebihi dari 1 atau tidak
#jika kita berbicara array2d pada numpy tentu bisa. contohnya objeknumpyarray[1,2] mengindeks baris 1 kolom 2 dari array 2d