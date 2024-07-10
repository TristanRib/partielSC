# partielSC

## Exercice n°1 :

### Code initial
```java
public class OrderSystem {
    private Map<Integer, List<String>> orderList; // Liste des commandes
    
    public void addNewOrder(Integer customerID, String itemName) {
        List<String> items = orderList.getOrDefault(customerID, new ArrayList<>());
        items.add(itemName);
        orderList.put(customerID, items);
    }
    
    public void modifyOrder(Integer customerID, Integer itemIndex, String newItemName) {
        List<String> items = orderList.get(customerID);
        if (items != null && itemIndex < items.size()) {
            items.set(itemIndex, newItemName);
        }
    }
    
    public void removeOrder(Integer customerID, Integer itemIndex) {
        List<String> items = orderList.get(customerID);
        if (items != null && itemIndex < items.size()) {
            items.remove(itemIndex);
        }
    }
    
    public void printOrders() {
        for (Map.Entry<Integer, List<String>> entry : orderList.entrySet()) {
            System.out.println("Customer ID: " + entry.getKey());
            System.out.println("Items: " + String.join(", ", entry.getValue()));
            System.out.println();
        }
    }
}
```

### Code proposé
```java
public class OrderSystem {
    private Map<Integer, List<String>> orderList; // Liste des commandes
    
    public void addOrder(Integer customerID, String itemName) {
        List<String> items = orderList.getOrDefault(customerID, new ArrayList<>());
        items.add(itemName);
        orderList.put(customerID, items);
    }
    
    public void modifyOrder(Integer customerID, Integer itemIndex, String newItemName) {
        List<String> items = orderList.get(customerID);
        if (items != null && itemIndex < items.size()) {
            items.set(itemIndex, newItemName);
        }
    }
    
    public void removeOrder(Integer customerID, Integer itemIndex) {
        List<String> items = orderList.get(customerID);
        if (items != null && itemIndex < items.size()) {
            items.remove(itemIndex);
        }
    }
}

public class LoggerPrint implements LoggerSystemInterface {
    public void printOrders(Map<Integer, List<String>> orderList) {
        for (Map.Entry<Integer, List<String>> entry : orderList.entrySet()) {
            this.printOrder(entry);
        }
    }
    
    public void printOrder(MapEntry<Integer, List<String>> entry) {
        System.out.println("Customer ID: " + entry.getKey());
        System.out.println("Items: " + String.join(", ", entry.getValue()));
        System.out.println();
    }
}
```

## Exercice n°2 :

Le code propre respecte quatre piliers définis par Kent Beck :
- Le code passe ses tests
- Le code exprime son intention
- Le code ne contient pas de duplication
- Le code est minimaliste

### Le code passe ses tests

Un code propre réussit tout ses tests, maintenant il faut savoir écrire de bon tests. Il existe par exemple le TDD (Test Driven Development) qui simplifie leur écriture.
Dans le TDD, nous écrivons premièrement un test qui rate, puis nous implémentons sa solution, le test passe, puis nous faisons une refacto du code, et cela en boucle.

### Le code exprime son intetion

Pour que le code exprime son intention, il faut se mettre d'accord avec son équipe, le métier, les testeurs, tout les acteurs qui seront amenés à participer à son écriture sur des conventions de nommage.
Le premier point pour qu'un code soit compréhensible c'est que ceux qui l'écrivent le comprennent, tous.

Par exemple, il faut des noms simple à retenir, à rechercher, des noms logiques, des noms parlant et précis tout en étant concis etc...

En contre exemple, il faut éviter les mappins mentaux, les noms à rallonge ou trop généraux, le changement de langage dans une même base de code etc...

Le code, c'est la base de travail de tout développeur, un code qui est clair est un code qui ne nécessite pas de commentaires complémentaires.
Utiliser des commentaires pour exprimer ce que le code fait montre un problème dans l'écriture de ce dernier. Un code qui exprime son intetion se suffit à lui même.

### Le code ne contient pas de duplication

Un code clean c'est un code sans duplication. Il faut retenir l'acronyme D.R.Y (Don't Repeat Yourself). La duplication augmente la difficulté à maintenir, à comprendre, à corriger le code dupliqué.

Mais il ne faut pas trop généraliser non plus, et surtout pas en prévention, ce serait un anti pattern. Pour cela, il faut retenir l'acronyme W.E.T (Write Everything Twice).
On ne factorise pas un code tant qu'il n'est pas écrit deux voir trois fois.

"On ne sèche (DRY) pas quelque chose qui n'est pas mouillé (WET)."

### Le code est minimaliste

Un code trop complexe c'est un code non maintenanble. Un code minimaliste c'est un code qui a réussit à factoriser ses mécanismes (D.R.Y) tout en restant clair et pratiquable.

Il faut retenir les acronymes K.I.S.S (Keep It Simple, Stupid) et Y.A.G.N.I (You Ain't Gonna Need It).   

## Exercice n°3 :

Les méthodes agiles, vendus comme telles, ne sont pas réellement une application de l'Agilité comme décrite par Alistair Cockburn.

De mon expérience personnelle, l'Agilité, c'est une team review chaque matin d'une quinzaine de minutes où chacun explique sa journée précédente, des points marquants, et sa journée en perspective.
De mon expérience personnelle, l'Agilité est appliquée sans jamais fragiliser un des points du triangle QCD, nous devons chiffrer, donner une périmètre et une date pour tout nos développement.

Il y a donc pas mal d'améliorations possibles.

- Premièrement, le triangle QCD. Il faudrait se mettre d'accord avec le client sur l'utilisation du principe d'Agilité dans le développement de sa solution pour nus permettre de relacher l'un des trois points du triangle.
- Deuxièmement, une simple team review n'est pas vraiment productive, c'est une discussion assez creuse ou tout le monde parle mais n'écoute pas grand chose, et tout le monde n'en a pas grand chose à faire non plus.

Il faudrait appliquer les vrais piliers du principe de l'agilité. Mettre l'accent sur le côté humain, une équipe humaine, qui s'entend et se comprend, tout en se donnant le temps de faire de son mieux.

- Se concentrer sur l'ajout constant de valeur.
- Se concentrer sur les intéractions humaines et les normes de l'équipe.
- 
## Exercice n°4 :

### Code initial
```java
public class OrderProcessor {
    private Database database;
    private EmailService emailService;
    private InventorySystem inventorySystem;
    
    public OrderProcessor() {
        this.database = new Database();
        this.emailService = new EmailService();
        this.inventorySystem = new InventorySystem();
    }
    
    public void processOrder(Order order) {
        // Vérifier la disponibilité des articles en stock
        List<Item> items = order.getItems();
        for (Item item : items) {
            if (!inventorySystem.isItemAvailable(item)) {
            throw new RuntimeException("Item not available in inventory");
            }
        }
        
        // Enregistrer la commande dans la base de données
        database.saveOrder(order);
        
        // Envoyer un e-mail de confirmation au client
        String message = "Your order has been received and is being processed.";
        emailService.sendEmail(order.getCustomerEmail(), "Order Confirmation", message);
        
        // Mettre à jour l'inventaire
        for (Item item : items) {
        inventorySystem.updateInventory(item, item.getQuantity() * -1);
        }
        
        // Appliquer une remise pour les clients fidèles
        if (order instanceof LoyalCustomerOrder) {
            LoyalCustomerOrder loyalCustomerOrder = (LoyalCustomerOrder) order;
            loyalCustomerOrder.applyDiscount();
        }
    }
}
        
public class LoyalCustomerOrder extends Order {
    @Override
    public void applyDiscount() {
        // Appliquer une remise de 10%
        setTotalPrice(getTotalPrice() * 0.9);
    }
}
```

Ce code ne respecte pas les principes S.O.L.I.D, il contient plusieurs problèmes :

- processOrder n'est pas agnostique, il utilise l'implémentation de son service d'email, de database, et n'utilise même pas son inventory system. Non respect de tout les principes SOLID.
- Le code n'utilise pas d'interface, ici il dépend de l'implémentation, non respect du D : Dependency Inversion.
- Le code ne fait trop de chose, la méthode processOrder est un fourre tout, il check le stock, save dans la databse, apply le discount, update les stocks, non respect du S : Single Responsability.
- Si n'importe quelle implémentation des services que le code utilise change, le code présent doit aussi changer, non respect du S et du O : Open-Closed.

### Code proposé
```java
enum mailTypeEnum {
    CONFIRMATION,
    CANCELATION,
}

enum customerStatus {
    LOYAL,
    BASIC,
    UNRELIABLE,
}

public interface databaseInterface {
    public function void saveOrder(Order order);
}

public interface emailServiceInterface {
    public function void sendEmail(String email, mailTypeEnum type);
}

public interface inventorySystemInterface {
    public function void checkStockAvailability(List<Item> items);
    
    public function void isAvailable(Item item);
}

public class OrderProcessor {
    private Database databaseInterface;
    private EmailService emailServiceInterface;
    private InventorySystem inventorySystemInterface;
    
    public OrderProcessor() {
        this.database = new Database();
        this.emailService = new EmailService();
        this.inventorySystem = new InventorySystem();
    }
    
    public void processOrder(Order order) {
        List<Item> items = order.getItems();

        inventorySystem.checkStockAvailability(items);

        if (order.getCustomerStatus == customerStatus::LOYAL) {
            order.applyDiscount(0.1);
        }
        
        emailService.sendEmail(order.getCustomerEmail(), mailTypeEnum::CONFIRMATION);
        
        inventorySystem.updateStock(order)
        
        database.saveOrder(order);
    }
}
```