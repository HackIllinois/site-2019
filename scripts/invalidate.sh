#!/bin/bash
if [ "$TRAVIS_BRANCH" = "master" ]
then

curl -X DELETE "https://api.cloudflare.com/client/v4/zones/$CLOUDFLARE_IDENTIFIER/purge_cache" \
  -H "X-Auth-Email: $CLOUDFLARE_AUTH_EMAIL" \
  -H "X-Auth-Key: $CLOUDFLARE_API_KEY" \
  -H "Content-Type: application/json" \
  --data '{"purge_everything":true}' \
  2>&1

fi
