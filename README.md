## Create the secret for signing Jwt
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=vlookbywillnguyen
kubectl get secrets

## kubernetes vs ecs
deployment - task definition
pod - task

## Node.js vs Ruby on Rails
middleware - before_action
supertest - rspec API call
mongodb-memory-server - create test database
test/setup.ts - rspec_helper, rails_helper
