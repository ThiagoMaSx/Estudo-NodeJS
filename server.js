/*
import { createServer}  from "node:http"

const server = createServer((request, response) => {
    response.write("oi");

    return response.end()
})

server.listen(3333)
*/

//Criando servidor com fastify
import fastify from "fastify";

const server = fastify()

server.get('/', () => {
    return "Hello world"
})

server.get('/Contact', () => {
    return "Hello world"
})

server.get('/About', () => {
    return "Hello world"
})


server.listen({
    port: 3333
})