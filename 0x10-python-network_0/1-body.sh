#!/bin/bash
# GET request to URL and display body of 200 status response
curl -sL -w "%{http_code}" "$1" -o /dev/null | grep -q "200" && curl -s "$1"
