#List pada dasarnya seperti list pada java, kalau secara hipotesis list pada python adalah linkedlist
#list bisa mengandung boolean, number, string, dan sebagainya
listku = [1,2,3,4]
print(listku)

#list bisa mengandung kombinasi berbagai tipe data
listKombinasi = [1,2,True,"hehe","keke"]
print(listKombinasi)

#untuk mengambil range tertentu saja dapat menggunakan [start:end], namun perlu catatan content dengan index[end] tidak akan diambil
#akan mengambil dari index 1 sampe ujung kanan index juga akan diambli
print(listKombinasi[1:])

#akan mengambil dalam range [1,3) (ingat notasi matematika) bahwa akan mengambil dari 1 sampai 2
print(listKombinasi[1:3])

#jika tidak dispesifikasikan start maupun endnya maka dianggap ingin mengambil semua index
print(listKombinasi[:])

# index list sebenarnya seperti circular, element ujung berindex -1, element ujung peringkat 2 berindex -2, dan seterusnya
print(listKombinasi[-1])

# karena index -2 merepresentasikan dari element perinkat 2 dari ujung, maka [:-2] akan mengambil element dari index 0 samapai element peringkat 2 dari ujung tersebut, namun element tersebut tidak diikutkan
print(listKombinasi[0:-2])

#untuk mengecek apakah objek tertentu ada dalam list
if True in listKombinasi: print("True ada pada listKombinasi")
if "haha" in listKombinasi: print("haha ada pada listKombinasi")
else: print("haha tidak ada pada listKombinasi")

listManipulasi = [1,2,True,"hehe","keke","hehe"]

#akan mereturn index pertama dari value yang dimasukkan, python akan mengecek satu persatu dari index 0 apakah value yang dimasukkan sama dengan content dari index yang sedang diinsepsi, jika ya maka kembalikan indexnya namun jika tidak, maka lanjut iterasi ke index selanjutnya. disini karena valuenya adalah 'hehe' maka index yang diberikan adalah 3
print(listManipulasi.index("hehe"))

#jika kita masukan value True kedalam list, maka list akan mengembalikan index 0, karena value 1 dan True memiliki byte yang sama yaitu 0x01, maka menghasilkan True
print(listManipulasi.index(True))

#logika 1==True menghasilkan True
print(1==True)

#jika 2==True maka false, karena nilai byte yang berbedsa
print(2==True)

#jika suatu list kelebihan indexnya maka error
# print(listManipulasi[len(listManipulasi)])

#memasukkan list ke dalam list
listManipulasi.extend(listKombinasi)
print(listManipulasi)

#memasukkan objek sebelum index yang dispesifikasikan
listManipulasi.insert(3,69)
print(listManipulasi)

#menghapus seluruh content dari list
listManipulasi.clear()
print(listManipulasi)

listKomparasi1 = [1,2,3] #listKomparasi akan mereference alamat yang berbeda meskipun kontennya sama dengan lsitKomparasi2
listKomparasi2 = [1,2,3]

#True
#berbeda dengan javascript yang membandingkan referencenya jika ada 2 objek yang dikomparasi, jika mereference alamat yang sama maka akan return true tetapi jika referencenya berbeda maka return false. Untuk python tidak membandingkan reference namun membandingkan contentnya
print(listKomparasi1==listKomparasi2)

#TODO: pr
listKomparasi1.append([[1]])
listKomparasi2.append([[1]])

#true, berbeda dengan javascript yang jika array dimasukkan objek yang berbeda (reference) namun kontennya sama akan menghasilkan false karena membandingkan reference. namun di python yang penting adalah kontennya 
print(listKomparasi1==listKomparasi2," perbandingan listkomparasi")

#pop akan mengembalikan objek yang dihapus
#jika dilakukan pop (menghapus objek ujung di kedua listKomparasi), maka akan true perbandingannya
pop1 = listKomparasi1.pop()
pop2 = listKomparasi2.pop()

print(listKomparasi1)
print(listKomparasi2)
print(listKomparasi1==listKomparasi2,"perbandingan listkomparasi setelah objek list dihapus")

#remove akan menghapus value yang dimiliki
listKomparasi1.remove(2)
print(listKomparasi1)

#mendifinisikan list juga bisa menggunakan class list
listObjek = list()
print(listObjek)

listTestReference = [1,2,3]
#jika melakukan assignment list ke list lain, maka list lain tersebut akan menunjuk reference yang sama
listTestReference2 = listTestReference

#oleh karena itu akan mengubah keduanya jika pada reference tersebut ada yang berubah
listTestReference2.append('a')

print(listTestReference)
print(listTestReference2)

#jika kita ingin mengambil kontennya saja 
#bisa menggunakan class list
#constructor list akan mengambil 1 per satu index dari argument list yang dimasukkan dan memasukkannya 1 per satu juga ke objek list
listTestReference3 = list(listTestReference)

#jika diubah listTestReference3, tidak akan mengubah listTestReference
listTestReference3.append("data baru")
print(listTestReference3)
print(listTestReference)

#bisa juga menggunakan list.copy
listTestReference4 = listTestReference.copy()
listTestReference4.append("coba")
print(listTestReference4)
print(listTestReference)

#mendefinisikan list dapat menggunakan asterisk (*)
#ingin membuat 1 5 kali
list_1_5_kali = [1] * 5
print(list_1_5_kali)

#atau sequence yang berulang
list_1_2_5_kali = [1,2] *5
print(list_1_2_5_kali)

#bisa juga menggunakan for
list_for = [x*x for x in range(5)]
print(list_for)



