---
id: fresponze_hardware_open_default
title: IAudioHardware::Open()
---

The `Open()` method creates default endpoint device.

## Syntax 
```cpp
bool Open(fr_i32 DeviceType, fr_f32 DelayTime);
```

## Parameters
* DeviceType - see `ETypeEndpoint` enum for more information
* DelayTime - buffer frame size in milliseconds

## Return
No return value.

:::note
This method is synchronous which means that calling it can completely stop the thread up to 2 seconds.
:::

## Using

```cpp
bool 
Examples::InitAudio(
    IAudioHardware* pAudioHardware, 
    IAdvancedMixer* pAdvancedMixer
) 
{
    Examples::ResetAudio(pAudioHardware, pAdvancedMixer);

    if (pAudioHardware->Open(RenderType, 100.f)) {
        pAudioHardware->GetDeviceFormat(RenderType, Context.DeviceFormat);
        pAdvancedMixer->SetMixFormat(Context.DeviceFormat);
        return true;
    }

    return false
}
```