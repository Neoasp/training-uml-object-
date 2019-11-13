/**
 * @name User
 * @author Neoasp
 * @version 1.0.0
 * @package models
 */

 // contrairement au JS, l'export se fait au départ
 // abstract : une classe abstraite ne peut pas etre instanciée
export abstract class User {
    // private : l'attribut n'est accessible que depuis la classe (à mettre par défaut)
    // protected : l'attribut devient accessible aux classes filles
    // string : attribut de type chaine de caratere
    /**
     * @var string
     * Name of a user
     */
    protected name: string;

    /**
     * @var string
     * Email of a user
     */
    protected email: string;

    /**
     * @var string
     * Phone number of a user
     */
    protected phone: string;

    // name : parametre
    // this.name : attribut
    // void : la methode ne retourne rien, User : la methode retourne un User
    /**
     * Sets the name of the user
     * @param name string Name of the current user
     * @return User, this : objet (permet de chainer les methodes)
     */
    public setName(name: string): User {
        this.name = name;
        return this;
    }

    /**
     * sets the email of a user
     * @param email string email of the user
     * @return User
     */
    public setEmail(email: string): User {
        this.email = email;
        return this;
    }

    /**
     * sets the phone of the user
     * @param phone string phone of the user
     * @return User
     */
    public setPhone(phone: string): User {
        this.phone = phone;
        return this;
    }

    /**
     * Pas de parametre pour le guetteur
     * @return string
     */
    public getName(): string {
        return this.name
    }

    public getPhone(): string {
        return this.phone
    }

    public getEmail(): string {
        return this.email
    }
}
