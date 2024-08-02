# if so  == 539h:
#   s = "j~ehmWbmxezisdmogi~Q"
#  for i in range(0, len(s)):
#    s[i] xor 0x2C 
hardcode = "j~ehmWbmxezisdmogi~Q"
retn = ""
for i in range(len(hardcode)):
    retn += chr(ord(hardcode[i]) ^ 0x2C)
print(retn)