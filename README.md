# ApolloFileUploadServerAndClient
this repository is file upload sample with apollo.

front end is made of typescript + react.
server side is made of typescript + express.

and then,
graphQL is made of apollo client and server.
.graphql files are generated with codegen tool.

## versions
```
$ node -v
v16.13.0
$ yarn -v
1.21.1
```

## install
```
$ (cd front && cp .env.sample .env && yarn install)
$ (cd server && cp .env.sample .env && yarn install)
```

## execute
```
$ (cd server && yarn start)
$ (cd front && yarn start)
```

## access
[http://localhost:3050](http://localhost:3050)

## if you want to update graphQL schema.
you can update `core/graphql/` files.
and then, generate graphql ts files

```
$ (cd core && yarn install)
$ (cd core && yarn generate-server)
$ (cd core && yarn generate-front)
```

## lint
```
$ (cd front && yarn fix)
$ (cd server && yarn fix)
```

