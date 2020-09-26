---
id: fresponze_resampler_reset
title: IBaseResampler::Reset()
---

The `Reset()` method reset all buffers and classes.

## Syntax 
```cpp
void Reset(
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
