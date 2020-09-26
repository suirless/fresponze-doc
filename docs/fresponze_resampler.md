---
id: fresponze_resampler
title: Overview
---

In order to reproduce sound with a different sampling rate, there is resampling. It exists in the form of various libraries and in the form of formulas and algorithms (sinc, linear, etc.), but usually uses the sinc implementation, since it is one of the best in terms of quality/ performance.

Fresponze uses the R8Brain library to convert sound in the best possible quality, but at the same time this library uses a large number of resources. If you require maximum performance, then there are several options:
* Wait for the implementation for the libfresample library
* Use all sounds with the same frequency as the device
* Take IAdvancedMixer as a basis and implement resampling in it after rendering
* Write your own resampler using the IBaseResampler interface

:::note
If you are using IAdvancedMixer you do not need to use the resampler manually, but if you write your own `IAudioCallback` you will need to use one of the available resamplers.
:::

## Available Resamplers

Of the basic ones, only `CR8BrainResampler` is available, but in the future it will be possible to use` CFresampleResampler` resampler. The use of these classes is possible through the abstract class (interface) `IBaseResampler`, from which the following classes are inherited.
