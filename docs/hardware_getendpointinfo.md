---
id: fresponze_hardware_getendpointinfo
title: IAudioHardware::GetEndpointInfo()
---

The `GetEndpointInfo()` method gets endpoint info struct.

## Syntax 
```cpp
void GetEndpointInfo(fr_i32 DeviceType, EndpointInformation& endpointInfo);
```

## Parameters
* DeviceType - see `ETypeEndpoint` enum for more information
* endpointInfo - information of choosed device

## Return
No return value.
