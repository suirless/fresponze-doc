---
id: fresponze_hardware_restart_uuid
title: IAudioHardware::Restart(UUID)
---

The `Restart()` method 

## Syntax 
```cpp
bool Restart(fr_i32 DeviceType, fr_f32 DelayTime, char* pUUID);
```

## Parameters
* DeviceType - see `ETypeEndpoint` enum for more information
* DelayTime - buffer frame size in milliseconds
* pUUID - UUID of device

## Return
* false - function failed.
* true - function succeded

:::caution
This method should only be called from the audio thread because hosts such as WASAPI cannot be deinitialized by different threads.
:::

## Using

```cpp
bool 
Examples::RestartAudio(
    IAudioHardware* pAudioHardware,
    IAdvancedMixer* pAdvancedMixer,
    fr_utf8* DevicePtr
) 
{
    bool bSuccess = pAudioHardware->Restart(RenderType, 100.f, DevicePtr);
    if (!bSuccess) {
        bSuccess = pAudioHardware->Restart(RenderType, 100.f);
    }

    if (bSuccess) {
        pAudioHardware->GetDeviceFormat(RenderType, Context.DeviceFormat);
        pAdvancedMixer->SetMixFormat(Context.DeviceFormat);
        return true;
    }

    return false
}
```