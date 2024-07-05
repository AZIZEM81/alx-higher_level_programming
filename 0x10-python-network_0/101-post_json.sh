#!/bin/bash
# POST JSON file and display response body
curl -sX POST -H "Content-Type: application/json" -d @"$2" "$1"
