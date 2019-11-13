import { User } from "./user";

/**
 * @name Client
 * @author Neoasp
 * @package ùodels
 * @version 1.0.0
 */

 // la classe Client est une extension de User
 // les attributs protégés dans la classe User sont dispo dans la classe Client
 export class Client extends User {

    private id?: number;

    public setId(id: number): Client {
        this.id = id
        return this
    }

    public getId(): number {
        return this.id
    }


 }