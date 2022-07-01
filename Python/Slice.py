#slice biasa digunakan pada indexing dengan index operator untuk memilih element dengan range index tertentu
#biasa digunakan pada list

listku = [1,2,3,4,5,6,7]
#dalam slicing index terakhir yang direpresentasikan argumen stop dalam slice(stop) akan di exclude
#memilih dari index 0 sampai 3. 
stop4 = slice(4)

print(listku[stop4])

#start = 2 stop = 6 sehingga akan mengambil element index 2 sampai 6
start_stop = slice(2,6)
print(listku[start_stop])

#tidak ditentukan stop namun ditentukan stepnya, melompat langsung 2 index
start_stop_step = slice(2,None,2)
print(listku[start_stop_step])

#kita juga dapat membuat tuple dari list
tuple_dari_list = tuple(['h','a','r','i','s'])

print(tuple_dari_list)

#kita dapat menggunakan if x in tuples 
if 'h' in tuple_dari_list:
    print(True)
else:
    print(False) 


#kita juga dapat destructuring dengan tuples
#harus berjumlah sama dan setiap urutan variabel sesuai dengan index pada tuples
i1, i2, i3, i4, i5 = tuple_dari_list
print(i1)
print(i2)
print(i3)
print(i4)
print(i5)

#bisa dengan jumlah berbeda namun perlu asterisk, dan element yang dikandungnya sesuai dengan jumlah element tuples - variabel lain destructuring
#element variabel dengan asterisk berjumlah 3 dan akan diubah menjadi list
j1, *j2, j3 = tuple_dari_list
print(j1)
print(j2)
print(j3)
