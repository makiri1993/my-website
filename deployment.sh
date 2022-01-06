#!/bin/sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
rustup target add wasm32-unknown-unknown
chmod +x tailwindcss.sh
cargo install --locked trunk
trunk config show
trunk build 