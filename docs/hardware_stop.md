---
id: fresponze_hardware_stop
title: IAudioHardware::Stop()
---

The `Stop()` method stops playing the internal stream.

## Syntax 
```cpp
bool Stop();
```

## Parameters
No params

## Return
* false - function failed.
* true - function succeded

## Remarks
The 'Stop' method is internal and is automatically called in the [Close](fresponze_hardware_close) method. Use this method only when you need to stop audio thread.