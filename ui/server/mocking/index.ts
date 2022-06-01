import {createServer, Response} from "miragejs"
import {booksObject} from "../handler/booksApi";

export const arrayAuth = {}

const dataServer = () => {
    createServer({
        routes() {
            this.get("/api/movies", () => ({
                movies: booksObject,
            }))
            this.post("/api/auth", (schema, request) => {
                JSON.parse(request.requestBody)
                return new Response(200)
            })
        },
        seeds(server) {
            server.db.createCollection('authObject', [arrayAuth])
        },
    })
}

export default {dataServer}