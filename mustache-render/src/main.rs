extern crate rustc_serialize;
extern crate mustache;

use std::io;
use rustc_serialize::json::Json;

fn main() {
    let template = mustache::compile_str("hello {{bar}}").unwrap();
    let data = Json::from_str("{\"foo\": 13, \"bar\": \"baz\"}").unwrap();
    template.render(&mut io::stdout(), &data).unwrap();
}

