#variabel dalam python tidak perlu mendefinisikan tipe data seperti di C/C++/Java atau bahkan javascript (meskipun hanya let dan var saja)
#meskipun begitu variable dalam python adalah typed, tetapi pendefinisian tipe ini hanya terjadi pada saat runtime bukan pada saat compile seperti java atau C

#ada 3 jenis tipe data dalam python, yaitu number, string dan boolean
#setiap variabel dalam python adalah object dan setiap object memiliki attributes (sifat) yang melekat padanya
#attributes float, int, fungsi, boolean, dan lain-lain tentu berbeda-beda. untuk melihat attributes dapat digunakan dir()

number = 3
print(number)
print(dir(number))

#variabel bisa diubah tipenya menjadi tipe yang lain, dalam contoh ini adalah string
# sebenarnya cara merubah suatu tipe variabel ke tipe yang lain cukup dengan mengubah sifat (attribut) dari suatu variabel (objek) dan mengubah contentnya
number = "1"
print(number)

#tidak seperti javascript, yang tiap variabelnya memberikan reference ke suatu alamat, pada python suatu variabel akan membuat objek yang baru jika dimasukkan suatu variabel.
#sehingga jika kita ubah variabelnya tidak akan mempengaruhi variabel yang lain
variabelBaru = number
print(variabelBaru)

number = 2
print(variabelBaru)
print(number)