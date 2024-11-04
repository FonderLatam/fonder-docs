# Docker

* Docs for build and deploy. All commands must be executed from the root folder.

* Build container: 

```bash
docker build  -t fonder-docs -f docker/Dockerfile .
```

* Build container for linux:

```bash
docker build --platform linux/amd64 -t fonder-docs -f docker/Dockerfile .
```

* Run container:

```bash
docker run -p 8080:80 fonder-docs
```
