import os

try:
    print(os.listdir('./haha'))
except:
    os.makedirs('./haha')