---
id: fresponze_hardware_open_idx
title: IAudioHardware::Open(ID)
---

The `Open()` method creates endpoint device by index.

## Syntax 
```cpp
bool Open(fr_i32 DeviceType, fr_f32 DelayTime, fr_i32 DeviceId);
```

## Parameters
* DeviceType - see `ETypeEndpoint` enum for more information
* DelayTime - buffer frame size in milliseconds
* DeviceId - Index of device to choose (-1 - default)

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
    fr_i32 idx
) 
{
    Examples::ResetAudio(pAudioHardware, pAdvancedMixer);

    bool bSuccess = pAudioHardware->Open(RenderType, 100.f, idx);
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