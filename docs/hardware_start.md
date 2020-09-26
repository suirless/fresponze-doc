---
id: fresponze_hardware_start
title: IAudioHardware::Start()
---

The `Start()` method starts playing the internal stream.

## Syntax 
```cpp
bool Start();
```

## Parameters
No params

## Return
* false - function failed.
* true - function succeded

## Remarks
The 'Start' method is internal and is automatically called in the [Open](fresponze_hardware_open_default) method. Use this method only when you need to stop and restart a audio thread.
