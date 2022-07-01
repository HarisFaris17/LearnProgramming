#class juga memakai titik dua ':' ketimbang kurung kurawal '{}' seperti di C/C++/Java 
#body dari class juga harus di-indent
#alasan mengapa menggunakan self di setiap fungsinya, karena self ini menandakan objeknya, jadi ketika mengakses method tertentu secara implisit akan memasukkan reference objek tersebut ke method sebagai argumen, sehingga jika kita mengubah-ubah self tersebut, maka akan mengubah objek tersebut
#attributes secara default adalah public
from msvcrt import kbhit


class Class_ku:
    #class attributes dan bukan objek attributes. semacam static variable di dalam java
    # disini saya menyebutkan static variabel, namun sebenarnya di python disebutnya class variabel, mirip namun tidak identik, karena class variabel menggunakan namespace class
    class_var = 1
    #kita juga dapat menggunakan static typing, agar memastikan bahwa value yang dimasukan sebagai argumen adalah sesuai
    #dan dengan static typing ini, performa akan lebih cepat karena attributes objek akan lebih sedikit (semacam di filter terlebih dahulu pada saat memasukan argumennya)
    def __init__(self,nama,umur: int) -> None:
        #pendefinisian attributes objek. self kemudian nama attributs. jika kita mendifinisikan variabel tanpa self dan diluar __init__ maka akan dianggap sebagai class attributes bukan objek attributes
        self.nama=nama
        self.umur=umur

    def umur10TahunLalu(self):
        return self.umur-10

#end class
haris = Class_ku("haris",22)
print(haris.umur10TahunLalu())
print(Class_ku.class_var)


#mencoba inheritance
#inherit class dari python menggunakan kurung '()' ketimbang kata extends selayaknya di java atau C/C++
#semua method dan attributes parent class akan di inherit class anak
class Class_baru(Class_ku):
    def __init__(self, nama, umur: int,alamat:str) -> None:
        super().__init__(nama, umur)
        self.alamat = alamat
    
    def alamat_ku(self):
        return self.alamat

    #dapat menggunakan static variabel class parent atau class lain tanpa masalah
    #static method class
    def class_varku():
        return Class_ku.class_var
    def class_lain_var_ku():
        return Class_lain.class_lain_var

class Class_lain():
    class_lain_var = 1


haris_baru = Class_baru("haris_baru",22,"perumnas")
#akses method class_baru
print(haris_baru.alamat_ku())
#akses method class parent (CLass_ku)
print(haris_baru.umur10TahunLalu())
print(haris_baru.umur)
print(Class_baru.class_varku())

#error karena parameter pada method class_varku tidak ada self (objek yang memanggil), sehinngga tidak bisa dipanggil oleh objeknya
# print(haris_baru.class_varku())

print(Class_baru.class_lain_var_ku())

class Coba_static_variabel_lebih_lanjut:
    #setiap class yang memiliki attribute static, objek dari class tersebut akan mereference alamat attribute tersebut
    variabel_static = 69
    def __init__(self) -> None:
        pass

coba_static1 = Coba_static_variabel_lebih_lanjut()
coba_static2 = Coba_static_variabel_lebih_lanjut()

print(coba_static1.variabel_static)
print(coba_static2.variabel_static)

#jika nilai attribute static diubah dari class nya maka akan berubah pada objeknya pula, karena objek akan mereference alamat dari attribute class yang sama
Coba_static_variabel_lebih_lanjut.variabel_static=100000
print(coba_static1.variabel_static)
print(coba_static2.variabel_static)

#jika melakukan assignment ke variabel static, maka python akan membuat variabel dengan nama yang sama namun khusus untuk objek tersebut, sehingga tidak nilainya tidak mempengaruhi objek yang lain
coba_static1.variabel_static = 6969

#berbeda
print(coba_static1.variabel_static)
print(coba_static2.variabel_static)
print(Coba_static_variabel_lebih_lanjut.variabel_static)

class Mutable_static_variabel:
    #list termasuk mutable
    variabel_static = []
    def __init__(self) -> None:
        pass

# jika kita mengubah element dari variabel yang mutable oleh objek maka python tidak akan membuat variabel baru, sehingga variabel tersebut berubah untuk keseluruhan objek

coba_mutable_static_variabel1 = Mutable_static_variabel()
coba_mutable_static_variabel2 = Mutable_static_variabel()

coba_mutable_static_variabel1.variabel_static.append('a')

print(coba_mutable_static_variabel1.variabel_static)
print(coba_mutable_static_variabel2.variabel_static)


#private dan protected sebenarnya tidak ada dalam python, hanya saja jika pemrogram ingin mengatakan harus hati hati dalam mengurus attributes.
#private attributes hanya jika attribute tersebut diawali undersocre 2 kali (__) dan protected diawali underscore 1 kali (_)
#protected dapat diakses didalam package yang sama atau package yang berbeda namun subclass
#private tidak bisa diakses diluar class asal meskipun diakses oleh class anak, dipakai oleh objek pun tidak bisa. tetapi sebenarnya tetap bisa karena python akan melakukan "name mangling" yakni akan mengubah nama attributes private menjadi _(namaClass)(attributePrivate). attribute yang berubah ini dapat dilihat dengan __dict__
class Class_coba_private_protected:
    def __init__(self,_nama,_umur:int,__jenis_kelamin:bool) -> None:
        self._nama = _nama
        self._umur = _umur
        self.__jenis_kelamin = __jenis_kelamin

    def get_jenis_kelamin(self):
        return self.__jenis_kelamin

objek_coba = Class_coba_private_protected("Haris",21,True)
#menggunakan ternary operator
#protected bisa diakses pada objek di package yang sama 
print("Jenis kelamin "+objek_coba._nama+" adalah laki" if objek_coba.get_jenis_kelamin() else "Jenis kelamin "+objek_coba._nama+" adalah perempuan","dan berumur "+str(objek_coba._umur)+" tahun")

#error
# print(objek_coba.__jenis_kelamin)

#tidak error karena mengakses private attributes melalui nama yang sudah dimangling
print(objek_coba._Class_coba_private_protected__jenis_kelamin)

#melihat name mangling
print(objek_coba.__dict__)

class Anak_class_coba_private_protected(Class_coba_private_protected):
    def __init__(self, _nama, _umur: int, __jenis_kelamin: bool,_attribute_baru) -> None:
        super().__init__(_nama, _umur, __jenis_kelamin)
        self._attribute_baru = _attribute_baru

