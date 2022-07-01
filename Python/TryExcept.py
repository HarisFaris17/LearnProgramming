#try except dapat digunakan jika ragu apakah suatu akan terjadi error, sehingga jika memang terjadi error program akan lanjut berjalan
try:
    #jika memasukkan huruf atau bilangan float maka akan error
    inputku = int(input("Masukkan bilangan integer : "))
    print(inputku)
#jika didalam body try terdapat error maka akan mengeksekusi body except
except:
    print("invalid input")

#kita juga dapat menspesifikasikan error tertentu
try:
    10/0
    inputku2 = int(input("Masukkan bilangan ke dua : "))
    print(inputku2)
#dapat menspesifikasikan error jenis apa
except ValueError:
    print("Invalid Input")
#dapat multiple except
#selain itu except yang dispesifikasikan dapat dijadikan sebagai variabel
except ZeroDivisionError as error:
    print(error)
    