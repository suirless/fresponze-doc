---
id: fresponze_hardware_close
title: IAudioHardware::Close()
---

The 'Close()' method used to update, close the program handles or reset the configured endpoint.

## Syntax 
```cpp
bool Close();
```

:::caution
This method should only be called from the audio thread because hosts such as WASAPI cannot be deinitialized by different threads.
:::

## Parameters
No params.

## Return
* false - function failed.
* true - function succeded

:::note
This method is synchronous which means that calling it can completely stop the thread up to 2 seconds.
:::

## Using

```cpp
void 
Examples::ResetAudio(
    IAudioHardware* pAudioHardware, 
    IAdvancedMixer* pAdvancedMixer
) 
{
    pAudioHardware->Close(); 
}
```