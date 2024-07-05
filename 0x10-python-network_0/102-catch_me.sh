#!/bin/bash
# Make request to catch_me and get "You got me!" response
curl -sL -X PUT -H "Origin: School" -d "user_id=98" 0.0.0.0:5000/catch_me
