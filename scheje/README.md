# Scheje's Web REPL

This is a sample Web Site to show Scheje's ability to eval scheme code
as a standalone JavaScript Artifact.

## Usage

The editor resembles Emacs - C-x C-e evaluates the s-exp behind point,
and C-j evaluates the whole buffer.

## Building and Hacking the Web REPL
Simply running 
```shell
lein figwheel
```
Shall build the clojurescript artifact. Pointing your browser to
*index.html* connects to the interactive development env.

## License

Copyright © 2016 Rafik Naccache

Distributed under the MIT License.
