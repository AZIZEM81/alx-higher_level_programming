#!/bin/bash
# Display only status code
curl -s -o /dev/null -w "%{http_code}" "$1"
