#!/bin/bash

echo "Generating documentation using jsdoc2md"
jsdoc2md --files src/*.js > src/README.md
