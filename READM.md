
Run locally

docker build --pull --no-cache -t test:latest .

docker run --rm -v /var/run/docker.sock:/var/run/docker.sock aquasec/trivy image test:latest


