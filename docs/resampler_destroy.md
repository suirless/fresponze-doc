---
id: fresponze_resampler_destroy
title: IBaseResampler::Destroy()
---

The `Destroy()` method deletes all buffers and classes.

## Syntax 
```cpp
void Destroy();
```

## Parameters
No params.

## Return
No return value.

## Remarks
The 'Destroy' method called when IAudioMixer call 'Reset()' method in resampler when audio hardware is restaring. Automatically calls in `CR8BrainResampler` destructor.