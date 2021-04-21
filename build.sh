#!/bin/bash

# Build frontend files
npx gulp build-release;

# Build backend files
cd src/go/;
go build ./...;
cp main ../../server;
cd ../../;