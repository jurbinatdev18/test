
Run locally

docker build --pull --no-cache -t test:latest .

docker run --rm -v /var/run/docker.sock:/var/run/docker.sock aquasec/trivy image test:latest


1. Imagen base alpine y por la facilidad
2. usar un JFROG con X ray y descargar desde un JFROG interno de esa forma no descargo imagenes externas 
3. usando reusable workflows





2. openssl debido para proteger la infomracion de los clientes ( tarjetas , pagos )
3. https://github.com/jurbinatdev18/test/settings/security_analysis  usar depenandbot enable para alertas
4. 