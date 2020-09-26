---
id: doc2
title: Running examples
---

Instructions for running test programs.

## Preparing to launch

If you want to use the Fresponze library, it is recommended that you learn the examples from the [GitHub repository](https://github.com/suirless/Fresponze/tree/master/examples) to get started with development.

To build test programs, you should enter this command:
```sh
cmake .. -G "Your Generator" -BUILD_EXAMPLES = ON
```

After you successfully have compiled the examples, you should specify the working directory - it is recommended to specify it as the source directory for the current example (example: `C:/source/Fresponze/examples/custom_callback`)

## Custom Callback

The first example is custom_callback. It demonstrates the ability to create your callback for manually manipulating the output signal (the example shows how you can generate a normal sine wave through this callback).

This application can be useful when you are making your own DAW or your own audio editor and allows you to use Fresponze as a portable library for sound output. Keep in mind that in this case you must implement resampling by yourself or use internal implementation (see [IBaseResampler] (fresponze_resampler)).