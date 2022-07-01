#dalam membuka file ada berbagai macam mode, ada read (r), read-write(r+), write(w), append(a)
#setiap file yang dibaca terdapat pointer yang menunjuk dimana python akan membaca file
#pada awal open maka pointer akan menunjuk ke awal sekali sebelum huruf, ketika ketika digunakan method readline(), maka python akan mengembalikan string dari line pertama, dan pointer sekarang menunjuk ke line ke 2, begitu seterusnya sampai line terakhir sudah dieksekusi

fileku = open("coba_file.txt","r")

#jika file dalam mode r dan dapat terbaca 
#readlines akan mengubah text menjadi list, element list dipisah jika bertemu dengan '\n'
#readlines() juga akan membuat pointer menjadi pada bagian akhir dari text
if(fileku.readable()): print(fileku.readlines())

#karena pointer sudah bagian akhir, maka perlu untuk mengembalikan ke bagian awal dari text, digunakan fungsi seek untuk mengubah pointer. 0 artinya bagian awal
fileku.seek(0)
#karena list, kita bisa menggunakan for
#muncul karena sebelumnya pointer sudah menunjuk bagian awal dari text
for file in fileku.readlines():
    print(file.upper())

# close jika sudah tidak digunakan lagi filenya
fileku.close()

#a artinya append, maksudnya hanya dapat write pada bagian akhir dari file
fileBaru = open("coba_file.txt","a")

#untuk menambahkan string baru ke file ke bagian akhir file
# fileBaru.write("\nAila = Adik")

#True
# print(fileBaru.writable())
# #False karena modenya adalah append
# print(fileBaru.readable())

# fileBaru.write("\nSuparmo = Ayah")
# # jika kita menggunakan seek(0) maka pointer akan menunjuk ke awal file, tetapi tidak akan berguna karena menggunakan append
# fileBaru.seek(0)
# fileBaru.write("\nLin = Ibu")
fileBaru.close()

#read-write
file_coba = open("coba_file.txt","r+")
#true
print(file_coba.readable())
#True
print(file_coba.writable())

#akan me-write di awal file
file_coba.write("Haris = Manager")
file_coba.write("\nHaris2 = Managerku2")
file_coba.close()
