#globals digunakan untuk melihat semua objek (variabel, fungsi dan sebagainya) global
#sedangkan locals digunakan untuk melihat semua objek local
#locals yang diletakkan di luar fungsi apapun akan bertindak selayaknya globals
#globals dan locals akan menyimpan variabel dalam dictionary. globals bisa mengubah suatu variabel dengan indexing, sedangkan locals tidak

namaku = "haris"
nama_lain = "aila"

print(globals())
#menghasilkan seperti global
print(locals())
print(namaku)

#mengubah dengan globals
globals()['namaku'] = "prasetyo"
print(namaku)

def fungsi_ku():
    var_fungsi = "var"
    #memberikan variabel yang hanya ada dalam fungsi ini saja
    print(locals())
    #tidak akan diprint karena locals hanya mendeteksi yang sudah pernah didefinisikan
    var_lain_fungsi = "lain"

    locals()["var_fungsi"] = "diubah"
    #tidak berubah, karena locals tidak bias mengubah variabel
    print(var_fungsi)

fungsi_ku()