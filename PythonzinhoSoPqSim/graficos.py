import numpy as np
import matplotlib.pyplot as plt
import json

f = 'PythonzinhoSoPqSim/data.json'

with open(f, "r") as file:
    data = json.load(file)

array = []

for dado in data:
    array.append(dado['city'])


x = np.arange(0, len(array))

plt.style.use('ggplot')

plt.ion()

plt.cla()
plt.clf()
plt.bar(array, x)
plt.pause(10)

plt.ioff()