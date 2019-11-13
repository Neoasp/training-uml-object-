import { Client } from "./../models/client";
import { ClientFactoryInterface } from "./interfaces/client-factory-interface";

/**
 * @name ClientFactory
 * @author Neoasp
 * @version 1.0.0
 * @package helpers
 */

 // implements : utilisation de l'interface ClientFactoryInterface dans la classe ClientFactory
 export class ClientFactory implements ClientFactoryInterface{
     public nameOnly(name: string): Client {
         return (new Client()
         .setName(name));
     }
     public full(name: string, phone: string, email: string): Client {
         return this.createFullClient(name, phone, email)
     }
     private createFullClient(name: string, phone: string, email: string): Client {
        // My logic here ... vérifier email pattern (EX verification du nom de domaine)

         const client: Client = new Client()
         .setName(name)
         .setEmail(email)
         .setPhone(phone);
         return client;
     }
     public createNameClient(name: string): Client {
         const client: Client = new Client()
         .setName(name)
         return client;
     }
 }
