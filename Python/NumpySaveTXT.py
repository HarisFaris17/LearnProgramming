import numpy as np

random=np.random.rand(3,2)
np.savetxt('./numpytxt.txt',random,delimiter=',')