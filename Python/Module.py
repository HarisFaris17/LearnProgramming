#gunakan import untuk import file atau modul. import bisa dari built-in python atau kita add module sendiri ke python (mudahnya menggunakan module pip) atau jika kita ingin memasukkan file yang sudah kita buat dalam folder yang sama kita dapat langsung mengimportnya
#kita juga bisa menggunakan as sebagai sebutan baru untuk file import
#sesuatu yang di import akan berubah menjadi objek, sehingga fungsi, variabel public dapat diakses dengan namespace dari import tersebut disertai dengan nama variabel/fungsinya, hal ini dapat dilihat di globals() ataupun locals()
#import dengan format ini akan membuat reference ke module tersebut
#untuk mengakses objek, fungsi, attributes, dan sebagainya dari suatu module maka perlu ada namespace module/alias tersebut
import math

#jika seperti ini maka Exponent akan dianggap tidak ada yang ada hanya aliasnya (mereference module Exponent) karena pada namespaces kita tidak ada Exponent yang ada exp. dan tetap harus menggunakan namespace exp untuk mengakses objek, fungsi, attributes, dan sebagianya
import Exponent as exp
import sys
#meskipun kita mengimport anak tetapi tetap saja yang diimport adalah parent, bisa kita liat di globals() ataupun sys.modules
import os.path
#akses fungsi dan lainnya memerlkan namespace math
print(math.sqrt(9))

#memakai alias
print(exp.exponent(9,3))

# error
# print(Exponent.exponent(9,3))

print(math.pi)

#sys.modules berfnngsi untuk melihat letak module (bisa built-in atau user-defined). jika tidak ada maka throw error
print(sys.modules['Exponent'])


#jika seperti ini maka import semua objek, attributes, fungsi dan sebagainya yang public (tanpa _) pada module base64
#untuk mengakses objek dari import format begini tidak diperlukan namespace module tersebut
from Question import *

#setiap objek dari module Question tidak memerlukan namespace Question
#jika pada file ini didefinisikan objek yang bernama sama dengan objek yang ada pada module yang diformat from x import * tetapi didefinisikan dibawah import, maka objek tersebut akan berubah menjadi seperti yang didefinisikan, namun module tidak akan menyadari itu
# question_answer.ask() TODO: uncomment this

#melihat semua objek
print(globals())
print(locals())

#kita bisa mengakses parent module, meskipun diatas kita mengimport anak module
print(sys.modules['os'])

#tidak bisa melihat module yang tidak kita import 
#error
# print(sys.modules['sched'])

#error juga karena tidak ada sched pada global variabel
# print(globals()['sched'])

#jika kita import dengan format seperti ini maka package tidak ada pada globals tetapi ada pada sys.module. dan jika kita import seperti ini kita tidak bisa mengakses objek lain selain yang kita import dari package tersebut. disini kita hanya bisa mneggunakan acos
from email import encoders

#tidak error
print(sys.modules['email'])

#error
# globals()['email']

print(globals()['encoders'])
