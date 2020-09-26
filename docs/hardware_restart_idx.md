---
id: fresponze_hardware_restart_idx
title: IAudioHardware::Restart(ID)
---

The `Restart()` method 

## Syntax 
```cpp
bool Restart(fr_i32 DeviceType, fr_f32 DelayTime, fr_i32 DeviceId);
```

## Parameters
* DeviceType - see `ETypeEndpoint` enum for more information
* DelayTime - buffer frame size in milliseconds
* DeviceId - Index of device to choose (-1 - default)

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
    fr_i32 idx
) 
{
    bool bSuccess = pAudioHardware->Restart(RenderType, 100.f, idx);
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