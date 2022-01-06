#!/bin/bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
rustup target add wasm32-unknown-unknown
cargo install --locked trunk
trunk config show
./tailwindcss -- -i tailwind.css -o dist/tailwind.css
trunk build --release --config trunk.toml