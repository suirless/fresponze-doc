---
id: fresponze_hardware_getdeviceslist
title: IAudioHardware::GetDevicesList()
---

The `GetDevicesList()` method returns pointers to internal list of endpoints.

## Syntax 
```cpp
void GetDevicesList(EndpointInformation*& InputList, EndpointInformation*& OutputList);
```

## Parameters
* InputList - list of capture devices
* OutputList - list of render devices

## Return
No return value.
