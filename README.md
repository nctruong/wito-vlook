## Create the secret for signing Jwt
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=vlookbywillnguyen
kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=sk_test_WCqNFQEC9XbD5od0T8fRvnLV

kubectl delete secret stripe-secret
kubectl get secrets

## Ingress
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.5.1/deploy/static/provider/cloud/deploy.yaml

## kubernetes vs ecs
deployment - task definition
pod - task

## Node.js vs Ruby on Rails
middleware - before_action
supertest - rspec API call
mongodb-memory-server - create test database
test/setup.ts - rspec_helper, rails_helper

# publish a npm package
mkdir common
npm init -y
git init 
git add .
git commit -m 'init'
npm publish --access public 
tsc --init
npm run build
npm version patch
npm publish
git rm --cached . -rf

## Issues
container auth-mongo is waiting to start: mongo can't be pulled
=> docker pull mongo && skaffold delete && skaffold dev 

## Nats
kubectl get pods 
kubectl port-forward nats-depl-c96c8fc48-l5xcg 4222:4222
kubectl port-forward nats-depl-c96c8fc48-l5xcg 8222:8222

## LOGS
kubectl logs pod-name

## Issue of cache?
skaffold dev --no-prune=false --cache-artifacts=false

## Deploy Kubernetes to AWS
eksctl create cluster --name vlook --region ap-southeast-1 --fargate

10035* eksctl version\n
10036* /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"\n
10037* cd ~
10038* /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"\n
10039  cd ~
10040  brew tap weaveworks/tap\n
10041* brew install weaveworks/tap/eksctl\n
10042  eksctl version\n
10043  eksctl create cluster --name vlook --region ap-southeast-1 --fargate
10044  kubectl get nodes -o wide
10045  kubectl get pods -A -o wide