#!/bin/bash
# things to do:
# 1. Show off emscripten SDK
# 2. let's look at the source code
cat main.c
# 3. let's compile the source code the old fashioned way
gcc main.c -o out.bin
./out.bin
# 4. let's compile to wasm
emcc main.c -s WASM=1 -o out.html
emcc main.c -s BINARYEN=1
# 5. let's check out what we've got (browser, wasm, hex editor, js)
