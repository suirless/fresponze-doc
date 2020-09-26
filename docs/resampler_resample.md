---
id: fresponze_resampler_resample
title: IBaseResampler::Resample()
---

The `Resample()` method processes input buffer to convert it to other sample rate and copy data to output buffer

## Syntax 
```cpp
void Resample(fr_i32 frames, fr_f32** inputData, fr_f32** outputData);
```

## Parameters
* frames - input signal data frames
* inputData - Input signal data
* outputData - Output signal data

:::caution
Output data buffer must be greater or smaller then input data buffer because resample require this. Try use `CalculateFrames()` function to convert input to output frames. 
:::

## Return
No return value.

## Remarks
The 'Resample' method called when IAudioMixer process data to other sample rate.

## Using

```cpp
void SampleFunction(fr_f32** input, fr_f32** output, fr_i32 frames) {
    for (size_t i = 0; i++; i < frames) {
        input[0] *= 0.5f;
    }

    Resample(frames, input, output);
}
```