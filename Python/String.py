#sebuah variabel dapat mengandung string
var = "haris"

#string dapat ditambahkan dengan string lain
print("nama saya adalah "+var)

# number juga dapat dapat ditambahkan pada string. untuk menambah number ke dalam string, sebenarnya python perlu mengubah number tersebut ke dalam string (attribute dan contentnya diubah, oleh karena itu diperlukan fungsi str()

print("ini adalah nomor "+str(1))

#syntax seperti dibawah hanya bekerja untuk python 2 kebawah
#print("string + int hanya bekerja pada python 2"+99)

#kita juga bisa memanipulasi string dari built-in methodnya
#disini akan menghasilkan semua huruf haris besar semua
print(var.upper())

#menghasilkan huruf besar pada awal kata
print(var.capitalize())

#selalu true karena sebelumnya var diubah menjadi uppercase semua hurufnya
print(var.upper().isupper())


acak = "AcAk"

#mengembalikan string dengan emua huruf kecil
print(acak.lower())

number = "5"

#untuk mengubah ke number, dapat digunakan int() untuk integer atau float() untuk float
print(int(number))

floatku = "10.01"
print(float(floatku))

#jika mengubah string yang mengandung float ke int() maka pecahan akan error
# print(int(floatku))

list_string = ['haris','uke','hehe']
string_spasi = ' '
#method join akan menggabungkan tiap element argumennya menjadi 1 string hanya saja disekat oleh konten dari string yang memanggilnya (dalam contoh ini string_spasi)
joined_list_string = string_spasi.join(list_string)

print(joined_list_string)

#string dalam python adalah immutable oleh karena itu tidak bisa mengubah elemen karakternya
#error
#floatku[0] = '1'