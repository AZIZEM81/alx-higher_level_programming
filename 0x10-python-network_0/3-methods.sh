#!/bin/bash
# Display allowed HTTP methods
curl -s -I -X OPTIONS "$1" | grep "Allow" | cut -d " " -f 2-
