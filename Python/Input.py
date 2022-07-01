#python akan meminta input dari user, hasil input berupa string
inputku = input("Masukkan nama anda : ")
#bisa menggunakan operator + karena inputku adalah string
print("Nama anda adalah "+inputku)

inputku2 = input("Masukkan angka : ")

#untuk mengubah ke number, dapat digunakan int() untuk integer atau float() untuk float
print(int(inputku2))

#jika memasukkan angka berkoma (float) ke input yang seharusnya int maka akan terjadi error
print(int(input("Masukkan float : ")))