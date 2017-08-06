Webasssembly demos
==================

Some quick start hello worlds and experiments for C and Rust in WebAssembly.

Directory        | Description         
-----------------|---------------------
hello-world-c    | C language hello world
hello-world-rust | Rust language hello world
wasm-frontend    | A hello world (non-emscriptened) to demo how memory works.
mustache-render  | Render a mustache template in rust. FIXME: cargo couldn't compile to wasm last I checked, I think it's good now.

Getting set up
--------------

You will need:

1. [Emscripten](https://kripken.github.io/emscripten-site/docs/getting_started/downloads.html)
1. [Rust compiler](https://www.rust-lang.org/en-US/install.html)
1. Optional: [Cargo](https://crates.io/install) (package manager for Rust)

To run each demo:

1. `cd hello-world-c`
2. `cat compile.sh` for instructions.
