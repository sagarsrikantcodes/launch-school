/*
Difference between push() and concat() method 

- Yes there is a difference. While both the functions
have the same return value, the push function mutates the 
argument represented by the buffer array. That is, the caller 
will see that the array is different when the function returns. 
The rollingBuffer2 implementation doesn't mutate the argument 
specified by the value of buffer.

*/