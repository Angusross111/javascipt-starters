#!/bin/bash
set -e
args=("$@")

echo "Enter version:"
read version

name="swarmfarm-apples-webapp"
latest_id="$name:latest"
image_id="$name:$version"
AWS_id="$AWS_REPO/$image_id"
AWS_latest="$AWS_REPO/$latest_id"

if docker image inspect "$AWS_id" &> /dev/null; then
    echo "$AWS_id already exists, do you want to push it? (y/n)"
    read push
    if [ "$push" == "n" ]; then
        return 1
    fi
else
    docker build -t $AWS_id -t $AWS_latest  -f ./Dockerfile ./
fi

aws_version="$(aws --version | cut -d' ' -f 1 | cut -d'/' -f 2)"
aws_maj_version="$(echo $aws_version | cut -d'.' -f 1)"
aws_min_version="$(echo $aws_version | cut -d'.' -f 2)"
if (( $aws_maj_version >= 2 )) || (( $aws_min_version >= 18 )); then
    # Newer cli version
    aws ecr get-login-password --region ap-southeast-2 | docker login --username AWS --password-stdin "$AWS_REPO"
else
    # Older cli version
    aws ecr get-login | bash
fi
docker push $AWS_id
docker push $AWS_latest
echo "Pushed ${image_id} and ${latest_id} AWS ------>";