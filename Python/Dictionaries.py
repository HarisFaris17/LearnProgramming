#dictionary sebenarnya mirip dengan object pada javascript
#ia memiliki pasangan key dan value. kalau pada javascript namanya property dan value
#key pada dictionary harus string, number ataupun tuple dengan element yang immutable
dictionary_ku = {"nama" : "haris",
                "alamat" : "blok w"}

print(dictionary_ku)
#menakses key tertentu bisa menggunakan index seperti di list
print(dictionary_ku["nama"])

# key dictionary juga bisa menggunakan angka
dictionary_lain = {1:"property 1",2:"property 2"}
print(dictionary_lain)

#setiap key harus unik
#jika mendefinisikan key yang sama, maka yang akan dianggap adalah key beserta value yang terakhir
dictionary_tidak_unik = {"hehe" : "hehehehe","hehe":"alkj"}
print(dictionary_tidak_unik)

# untuk memasukkan key baru cukup dengan menggunakan indexing seperti list, assignment, beserta valuenya
dictionary_ku["keybaru"] = "key baru "
print(dictionary_ku)

# mengakses value pada dictionary jgua bisa menggunakan method get, jika key yang dimaksud tidak ada maka akan mereturn None. namun default dapat disertakan jika memang key yang disebutkan tidak ada
print(dictionary_ku.get("keybaru"))
print(dictionary_ku.get("key_yang_tidak_ada","key tidak ada"))

# untuk menghapus semua key dan value dari dictionary bisa digunakan method clear()
dictionary_ku.clear()
#kosong
print(dictionary_ku)

dictionary_baru = {"nama" : "baru","hehe" : "alskdjf"}

#untuk menghapus item tertentu dari dictionary dapat menggunakan method pop() dan pop() akan mereturn value dari key tersebut
valueHasilDariPop =  dictionary_baru.pop("nama")
print(dictionary_baru)
print(valueHasilDariPop)

# mengakses dictionary harus dengan key-nya, tidak bisa menggunakan index seperti list
# print(dictionary_baru[0])