#latian for,range dan string
#mengubah tiap kata vocal menjadi 'g'

kata = input("Masukkan input : ")

def translator (kata):
    result=""
    for char in kata:
        if(char=='a' or char=='i' or char=='e' or char=='u' or char=='o'): result+='g'
        else: result+=char
    return result
print(translator(kata))