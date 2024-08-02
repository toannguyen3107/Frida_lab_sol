int __cdecl Java_com_ad2001_frida0xa_MainActivity_stringFromJNI(_JNIEnv *env)
{
    const char *v1;  // eax
    int v3;          // [esp+14h] [ebp-24h]
    char v4[16];     // [esp+20h] [ebp-18h] BYREF
    unsigned int v5; // [esp+30h] [ebp-8h]

    v5 = __readgsdword(0x14u);
    std::string::basic_string<decltype(nullptr)>(v4, "Hello Hackers");
    v1 = (const char *)sub_18B80(v4);
    v3 = _JNIEnv::NewStringUTF(env, v1);
    std::string::~string(v4);
    return v3;
}
int __cdecl sub_18B80(int a1)
{
    return sub_18DB0(a1);
}
int __cdecl sub_18DB0(int a1)
{
    int v1; // eax

    v1 = sub_18E00(a1);
    return sub_18DF0(v1);
}
int __cdecl sub_18E00(int a1)
{
    if ((sub_18E70(a1) & 1) != 0)
    {
        return sub_18EB0(a1);
    }
    else
    {
        return sub_18EE0(a1);
    }
}
int __cdecl sub_18DF0(int a1)
{
    return a1;
}
int __cdecl sub_18EB0(int a1)
{
    return *(_DWORD *)(sub_18F20(a1) + 8);
}