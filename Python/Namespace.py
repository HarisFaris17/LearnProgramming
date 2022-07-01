#setiap objek python memiliki namespace. namespace adalah memetakan nama pada objek. sehingga nama yang sama (attributes misalkan) namun pada namespace yang berbeda tidak ada relasinya
#class dan objek dari class tersebut memiliki namespace yang berbeda. hal ini dapat dilihat dari 

class Classku:
    classku_var = 1

objekku = Classku()

#menggunakan namespace Classku
print(Classku.classku_var)
#menggunakan namespace objekku
print(objekku.classku_var)

#khusu untuk objek dan class. jika suatu attributes sedang dipanggil dari suatu objek, maka python mengevaluasi attribute tersebut apakah ada dalam objek tersebut, jika ada maka kembalikan nilainya namun jika tidak, cek namespace dari class objek tersebut, jika ada kembalikan jika tidak throw error
