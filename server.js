import { databaseMemory } from "./db-memory";
import fastify from "fastify";

//Criando servidor com fastify

const server = fastify()

const database = new databaseMemory ()


server.post('/videos', () => {
    database.create({
        title: 'Video about birds',
        description: 'yes, just birds',
        duration: 180

    })
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