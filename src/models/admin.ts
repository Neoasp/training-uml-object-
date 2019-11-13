import { User } from "./user";

/**
 * @name Admin
 * @author Neoasp
 * @version 1.0.0
 * @package models
 */

export class Admin extends User {
    private address: string;

    private static instanceOf: Admin = null;

    // ne permet plus de créer un administrateur
    private constructor() {
        super();
    }

    // une methode statique peut etre appelée sans faire un new
    public static getInstanceOf(): Admin {
        if (Admin.instanceOf === null) {
            Admin.instanceOf = new Admin();
        }
        return Admin.instanceOf;
    }
    
    /**
     * set the address of the Administrator
     * @param address 
     */
    public setAddress(address : string): Admin {
        this.address = address;
        return this;
    }

    /**
     * Return the address of the administrator
     * @returns string
     */
    public getAddress(): string {
        return this.address;
    }
}