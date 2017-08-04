var memory;
function printf(start){
  var chars = Array.from(new Uint8Array(memory.buffer));
  var end = chars.indexOf(0, start);
  var string = chars.splice(start, end-start)
    .map(code => String.fromCharCode(code))
    .join('');
  console.log(string);
}

// also try program-two-prints.wasm
fetch('program.wasm')
	.then(response => response.arrayBuffer())
	.then(bytes => WebAssembly.compile(bytes))
	.then(wasmModule => WebAssembly.instantiate(wasmModule, {
		env: { printf }
	}))
	.then(results => {
    memory = results.exports.memory;
		results.exports.main();
	});
