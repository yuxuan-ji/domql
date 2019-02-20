#!/bin/bash

echo "Generating documentation using jsdoc2md"
jsdoc2md --files ../src/* > api.md
