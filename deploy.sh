#!/usr/bin/env bash
set -ev # halt script on error and print all lines in the script before executing them

zip -r site build

curl -H "Content-Type: application/zip" \
  -H "Authorization: Bearer ${NETLIFY_TOKEN}" \
  --data-binary "@site.zip" \
  https://api.netlify.com/api/v1/sites/bamblehorse.netlify.com/deploys