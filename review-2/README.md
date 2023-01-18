# Digital audio plugins
# Build a band pass filter

# Client information
Filter takes in a soundwave and returns a soundwave the same length as the input, whilst making changes to the frequencies

Three parameters:
Soundwave is an array of frequencies: [60,10,45,60,1500]
Upper limit is an integer: default of 1000
Lower limit is an integer: default of 40

As an example:
[60,10,45,60,1500], 20, 50   >>   [50,20,45,50,50]

Inputs                           | Outputs
[20,25,45,50,45], 20, 50         | [20,25,45,50,45]
[10,25,45,50,45], 15, 50         | [15,25,45,50,45]
[10,25,45,50,45,10,5], 15, 50    | [15,25,45,50,45,15,15]
[15,25,45,50,100], 15, 60        | [15,25,45,50,60]
[1000,15,25,45,50,100], 15, 60   | [60,15,25,45,50,60]
[60,10,45,60,1500], 20, 50       | [50,20,45,50,50]


[sixty,10,45,60,1500], 20, 50    | "Corrupted data"