hardcode = "FPE>9q8A>BK-)20A-#Y"
retn = ""
for i in range(len(hardcode)):
    retn += chr(2 * i + ord(hardcode[i]))
print(retn)
