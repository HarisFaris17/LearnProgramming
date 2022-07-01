#segala sesuatu dalam python adalah object
#variabel dan fungsi dalam python adalah object
#setiap object tentu akan memiliki sifat (attributes). untuk melihat attributes ini dapat digunakan fungsi dir()

#variabel, dalam contoh ini adalah string memiliki punya attribute
var = "suatu variabel"
print(dir(var))

def haris():
    return 1
#fungsi memiliki attributes juga
print(dir(haris))

# tentu saja attribut fungsi dan variabel berbeda

#variabel bisa diubah tipenya menjadi tipe yang lain, dalam contoh ini adalah number. tentu saja ini bisa diraih karena tipe variabel (objek) dalam python
#terjadi pada saat runtime (sehingga dapat diubah ubah, disebut juga sebagai dynnamically type)
# sebenarnya cara merubah suatu tipe variabel ke tipe yang lain cukup dengan mengubah sifat (attribut) dari suatu variabel (objek) dan mengubah contentnya
var = 1
print(var)