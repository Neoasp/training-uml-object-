import { User } from "./models/user";
import { Client } from "./models/client";
import { Admin } from "./models/admin";
import { UserFactory } from "./helpers/user-factory";
import { ClientStrategy } from "./helpers/strategies/client-strategy";
import { AdminStrategy } from "./helpers/strategies/admin-strategy";
import { ClientRepository } from "./repositories/client-repository";

/**
 * @name App
 * @author Aélion
 * @version 1.0.0
 */
export class App {
    // constructor : methode appelée automatiquement par le système lors d'une instance
    public constructor() {
        const factory: UserFactory = new UserFactory();

        const repository: ClientRepository = new ClientRepository();

        //add a client
        // recast d'un type Client car create renvoie un User
        repository.add(<Client> factory.create(
            'Bond',
            '070077070707',
            'james@bond.com'
        ));

        //create an admin (recasté en admin pour préciser le fait qu'il a une adresse)
        factory.setStrategy(new AdminStrategy())
        const admin: Admin = <Admin> factory.create(
            'Super Admin',
            '9191919991',
            'admin@help.com',
            '10, baker street'
        );

        //Yet another user client
        factory.setStrategy(new ClientStrategy());
        repository.add(<Client> factory.create(
            'Picsou',
            '666666666',
            'dollar@donald.com'
        ));
        
        console.log('Admin : ' + admin.getName())
       
        
        //loop over repository
        // le => signifie que l'execution se fait pour tous les for each
        // le ` (altGR +7) evite de mettre une concatenation en entrant les valeurs avec $
        repository.getRepository().forEach((client: Client, id: number) => {
            console.log(`Nom : ${client.getName()} [${client.getId()}]\n`
            )
        })
    }
    
}



// Load the app ... permet de rentrer dans l'application App
// commande 'npm run webpack:dev' dans le terminal pour compiler vers du JS
// commande 'node ./dist/js/app.js' pour lancer le fichier js généré
const app: App = new App();