#latihan for loop
def exponent(base,power):
    if(power==0): return 1
    result = 1
    for i in range(power):
        result*=base
    return result

print(exponent(9,2))