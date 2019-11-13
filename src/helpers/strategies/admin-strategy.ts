import { UserStrategyInterface } from "../interfaces/user-strategy-interface";
import { Admin } from "./../../models/admin";
import { User } from "./../../models/user";

/**
 * @name AdminStrategy
 * @author Neoasp
 * @version 1.0.0
 * @package helpers.strategies
 */

export class AdminStrategy implements UserStrategyInterface {
    create(name: string, email: string, phone: string, address: string): User {
        const admin:Admin = Admin.getInstanceOf();
        admin.setAddress(address)
            .setName(name)
            .setPhone(phone)
            .setEmail(email);
        return admin;
    }
    
}