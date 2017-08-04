#!/bin/bash
# things to do:
# 1. Show off emscripten SDK
# 2. let's look at the source code
cat main.rs
# 3. let's compile the source code the old fashioned way
rustc main.rs -o out.bin
./out.bin
# 4. let's compile to wasm
rustc --target=wasm32-unknown-emscripten main.rs -o out.html
# 5. let's check out what we've got (browser, wasm, hex editor, js)
