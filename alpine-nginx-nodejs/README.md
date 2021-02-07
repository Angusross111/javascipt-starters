# alpine-nginx-nodejs

A small docker image for a Javascript Client and Server running in the same image.

It uses:

- nginx:1.19.6-alpine

- libuv:latest

- nodejs:14.15.4

- npm:6.14.10

## Build locally

```shell
docker build -t swarmfarm/alpine-nginx-nodejs .
```

## Use as base image

```Dockerfile
FROM swarmfarm/alpine-nginx-nodejs:latest
```

## Example

(TODO - add example)
An example use of this image can be found in [example](https://github.com/Angusross111/javascipt-starters/alpine-nginx-nodejs/tree/master/example).
