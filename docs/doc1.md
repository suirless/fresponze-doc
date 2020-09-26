---
id: doc1
title: Installation
sidebar_label: Installation
slug: /
---

## Project without CMake 
If you are not using CMake as your build system, you should try the Fresponze SDK builds available on the [Releases](https://github.com/suirless/Fresponze/releases) page on GitHub.

Each archive has several elements:
* *include - Fresponze SDK header files folder*
* *bin - folder with ready-to-use compiled libraries (of your choice - release-static, release-dynamic, debug-static, release-dynamic)*

## Preparing for installation
The Fresponze library during its build can use system packages without resorting to cloning the source of dependencies. For such use, you need to install the necessary set of libraries on your system through the package manager, which may differ on each system.

To use this functionality in Windows, you need to install [vcpkg](https://docs.microsoft.com/ru-ru/cpp/build/vcpkg?view=vs-2019) and after setting enter these commands:

```sh
vcpkg install libogg:x64-windows
vcpkg install opus:x64-windows
vcpkg install opusfile:x64-windows
```

List of possible commands for other platforms:

```sh
sudo apt-get install libopus-dev libogg-dev libopusfile-dev             // for Debian
sudo dpkg install -y libopus-dev libogg-dev libopusfile-dev             // for Arch
brew install opus ogg opusfile                                          // for macOS with Brew
```

## Cloning a repository

Clone [Fresponze](https://github.com/suirless/Fresponze) into the directory you need and create a folder for building the application via CMake:

```sh
git clone https://github.com/suirless/Fresponze.git
mkdir build
```

## CMake build

To build the Fresponze library with default options, enter the commands:

```sh
cd build
cmake .. -G"Your Generator"
```

If you want to build a library with additional build options, then you should learn the list of possible options for the Fresponze library:

```
BUILD_SHARED_LIBS - Build all libraries as DLL
BUILD_OPUSFILE_API - Use opus as available format for media listener (default - ON)
BUILD_RESONANCE_AUDIO_API - Use Resonance Audio as available emitter for advanced mixer (default - ON)
BUILD_FRESPONZE_STATIC - Build Fresponze as static library (default - OFF)
BUILD_EXAMPLES - Build examples for Fresponze library. (default - OFF)
USE_VCPKG - Use vcpkg instead of source packages (default - OFF)
```

To use additional build options, you need to enter the `-D` flag before the option name:
```sh
cmake .. -G"Visual Studio 16 2019" -DBUILD_OPUSFILE_API=OFF 
```
If you are using `vcpkg`, then when starting CMake you need to set the argument `-DCMAKE_TOOLCHAIN_FILE` as the path to vcpkg (see [here](https://vcpkg.readthedocs.io/en/latest/examples/installing-and-using-packages/#cmake))

## Post-build operations

For further development with the Fresponze library, you should integrate it into your CMake project:
```
add_subdirectory(${FRESPONZE_DIR})
target_link_libraries(your_project Fresponze::fresponze)
```