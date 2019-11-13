import { Client } from './../../models/Client';

/**
 * @name clientFactoryInterface
 * @author Neoasp
 * @version 1.0.0
 * @package helpers.interface
 */

// permet de limiter la forme aux méthodes nameOnly ou full
// methode sans corps dans une interface (corps créés dans la classe)
export interface ClientFactoryInterface {
    nameOnly(name: string): Client;
    full(name: string, phone: string, email: string): Client;
}