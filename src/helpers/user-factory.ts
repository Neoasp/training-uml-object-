import { ClientStrategy } from "./strategies/client-strategy";
import { UserStrategyInterface } from "./interfaces/user-strategy-interface";
import { User } from "./../models/user";
import { Client } from "./../models/client";
import { Admin } from "./../models/admin";

/**
 * @name UserFactory
 * @author Neoasp
 * @version 1.0.0
 * @package helpers
 */

export class UserFactory{
    private strategy: UserStrategyInterface = new ClientStrategy();

    public setStrategy(strategy: UserStrategyInterface): void {
        this.strategy = strategy;
    }

    public create(name: string, phone: string, email: string, address?: string): User {
        return this.strategy.create(name, email, phone, address);
    }
 }