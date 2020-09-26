---
id: fresponze_resampler_initialize
title: IBaseResampler::Initialize()
---

The `Initialize()` method deletes all buffers and classes.

## Syntax 
```cpp
void Initialize(
    fr_i32 MaxBufferIn, 
    fr_i32 InputSampleRate,
    fr_i32 OutputSampleRate,
    fr_i32 ChannelsCount,
    bool isLinear
);
```

## Parameters
* MaxBufferIn - max expected size in process buffer. Can equal 100ms or other device buffer value
* InputSampleRate - Input signal sample rate 
* OutputSampleRate - Output signal sample rate 
* ChannelsCount - Input and output channels count
* isLinear - Is resampler must work in linear mode? (use `false` if you want to get more perfomance)

## Return
No return value.

## Remarks
The 'Initialize' method called when IAudioMixer call 'Reset()' method in resampler when audio hardware is restaring. Also, you must call this method when you create application context.