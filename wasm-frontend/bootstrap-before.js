fetch('program.wasm')
	.then(response => response.arrayBuffer())
	.then(bytes => WebAssembly.compile(bytes))
	.then(wasmModule => WebAssembly.instantiate(wasmModule, {
		env: { printf: console.log }
	}))
	.then(results => {
		results.exports.main();
	});
