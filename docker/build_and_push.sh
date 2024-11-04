#!/bin/bash

set -e

echo "Building image..."

docker build --platform linux/amd64 -t fonder-docs -f docker/Dockerfile .

echo "Loggin in aws..."

aws ecr get-login-password --region us-west-1 | docker login --username AWS --password-stdin 733758412153.dkr.ecr.us-west-1.amazonaws.com

echo "Tagging...."

docker tag fonder-docs:latest 733758412153.dkr.ecr.us-west-1.amazonaws.com/fonder-docs:latest

echo "Uploading to aws ecr..."

docker push 733758412153.dkr.ecr.us-west-1.amazonaws.com/fonder-docs:latest

echo "Done!"