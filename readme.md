# A simple MEVN CRUD template for practicing

This is a very simple CRUD template project (actually, without the Deletion functionality at this point) for practicing dockerization. It is written with the MEVN (Mongo/Express/VueJS/NodeJS stack).

**The master branch is not dockerized.** For running the dockerized project, switch to the `dockerized` branch, and run:

```bash
docker-compose build
docker-compose up
```
Make sure that the ports mentioned in `docker-compose.yml` (3000, 27017, 8080) are available on your host machine, or modify the host ports (the ones before the '`:`') accordingly in the yml before running the commands).