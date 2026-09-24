import { databaseMemory } from "./db-memory";

//Criando servidor com fastify
import fastify from "fastify";

const server = fastify()

server.post('/videos', () => {
    return "Hello world"
})

server.get('/videos', () => {
    return "Hello world"
})

server.put('/videos/:id', () => {
    return "Hello world"
})

server.delete('/videos/:id', () => {
    return "Hello World"
})


server.listen({
    port: 3333
})