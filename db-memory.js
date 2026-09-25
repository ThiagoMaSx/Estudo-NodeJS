import { randomUUIDv7 } from "crypto"

export class databaseMemory {
    #videos = new Map()
    
    list() {
        return this.#videos.values()
    }

    create(video) {
        const videoId = randomUUIDv7

        this.#videos.set(videoId, video)
    }

    update(id,video) {
        this.#videos.set(id,video)
    }

    delete(id,video) {
        this.#videos.delete(id)
    }
}   
