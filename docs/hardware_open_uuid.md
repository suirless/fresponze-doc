---
id: fresponze_hardware_open_uuid
title: IAudioHardware::Open(UUID)
---

The `Open()` method creates endpoint device by device name or UUID.

## Syntax 
```cpp
bool Open(fr_i32 DeviceType, fr_f32 DelayTime, char* pUUID);
```

## Parameters
* DeviceType - see `ETypeEndpoint` enum for more information
* DelayTime - buffer frame size in milliseconds
* pUUID - GUID of device

## Return
* false - function failed.
* true - function succeded

:::note
This method is synchronous which means that calling it can completely stop the thread up to 2 seconds.
:::

## Using

```cpp
bool 
Examples::InitAudio(
    IAudioHardware* pAudioHardware,
    IAdvancedMixer* pAdvancedMixer,
    fr_utf8* DevicePtr
) 
{
    Examples::ResetAudio(pAudioHardware, pAdvancedMixer);

    bool bSuccess = pAudioHardware->Open(RenderType, 100.f, DevicePtr);
    if (!bSuccess) {
        bSuccess = pAudioHardware->Open(RenderType, 100.f);
    }

    if (bSuccess) {
        pAudioHardware->GetDeviceFormat(RenderType, Context.DeviceFormat);
        pAdvancedMixer->SetMixFormat(Context.DeviceFormat);
        return true;
    }

    return false
}
```