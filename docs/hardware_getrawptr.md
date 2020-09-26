---
id: fresponze_hardware_getrawptr
title: IAudioHardware::GetRawPtr()
---

The `GetRawPtr()` method returns raw pointer to endpoint device (such as `IMMDevice`, `snd_pcm_t`, etc.).

## Syntax 
```cpp
void GetRawPtr(fr_i32 DeviceType, void*& OutPtr);
```

## Parameters
* DeviceType - see `ETypeEndpoint` enum for more information
* OutPtr - raw pointer to device (depended on hardware type)

## Return
No return value.

## Remarks
The 'GetRawPtr' method is internal and is automatically called in the 'IAudioCallback' methods.
