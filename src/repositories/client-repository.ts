import { Client } from "./../models/client";

/**
 * @name ClientRepository
 * @author Neoasp
 * @version 1.0.0
 * @package repositories
 * @abstract Collection of clients
 */
export class ClientRepository {
    // map : equivalent au tableau si ce n'est que l'indice est remplacé par la clé (ici number)
    private repository: Map<number, Client>;

    // constructor pour définir et initier Map
    public constructor() {
        this.repository = new Map<number, Client>();
    }


    public getRepository(): Map<number, Client> {
        return this.repository;
    }
    /**
     * Add a client to the map
     * @param client client to add
     */
    public add(client: Client): ClientRepository {
        this.repository.set(client.getId(), client);
        return this;
    }
    /**
     * get a client from the map
     * @param id id to get
     */
    public get(id: number): Client {
        return this.repository.get(id);
    }
    /**
     * delete a client from the map
     * @param id id to delete
     */
    public delete(id: number): ClientRepository {
        this.repository.delete(id);
        return this;
    }
    /**
     * replace a client in the map
     * @param client client to update
     */
    public update(client: Client): ClientRepository {
        return this.add(client);
    }
}