#!/bin/bash
# GET request to URL, display body of 200 status response
curl -s -o /dev/null -w '%{http_code}' "$1" | grep -q "200" && curl -s "$1"
