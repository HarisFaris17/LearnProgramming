try:
    file=open('./num.txt','r')
    print(file)
except:
    print('The file doesn\'t exist')