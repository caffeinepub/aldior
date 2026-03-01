import Text "mo:core/Text";
import Order "mo:core/Order";
import List "mo:core/List";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";

actor {
  type Product = {
    id : Nat;
    name : Text;
    description : Text;
    price : Nat;
    category : Text;
    sizes : [Text];
    stock : Nat;
    imageUrl : Text;
  };

  module Product {
    public func compareByPrice(p1 : Product, p2 : Product) : Order.Order {
      Nat.compare(p1.price, p2.price);
    };

    public func compareByStock(p1 : Product, p2 : Product) : Order.Order {
      Nat.compare(p1.stock, p2.stock);
    };
  };

  type CartItem = {
    productId : Nat;
    size : Text;
    quantity : Nat;
    priceSnapshot : Nat;
  };

  module CartItem {
    public func compareByQuantity(c1 : CartItem, c2 : CartItem) : Order.Order {
      Nat.compare(c1.quantity, c2.quantity);
    };
  };

  type ContactMessage = {
    name : Text;
    email : Text;
    message : Text;
  };

  module ContactMessage {
    public func compareByEmail(m1 : ContactMessage, m2 : ContactMessage) : Order.Order {
      Text.compare(m1.email, m2.email);
    };
  };

  let productArray : [(Nat, Product)] = [
    (
      1,
      {
        id = 1;
        name = "Classic White Tee";
        description = "Premium cotton white T-shirt &quot;Build Loud. Worn Loose&quot; slogan";
        price = 2500;
        category = "Tops";
        sizes = ["S", "M", "L", "XL"];
        stock = 100;
        imageUrl = "classic_white_tee.jpg";
      },
    ),
    (
      2,
      {
        id = 2;
        name = "Slim Fit Jeans";
        description = "Dark blue, tapered fit jeans for everyday wear";
        price = 4500;
        category = "Bottoms";
        sizes = ["30", "32", "34", "36"];
        stock = 80;
        imageUrl = "slim_fit_jeans.jpg";
      },
    ),
    (
      3,
      {
        id = 3;
        name = "Pullover Hoodie";
        description = "Charcoal gray hoodie with front pocket and logo";
        price = 6000;
        category = "Tops";
        sizes = ["S", "M", "L", "XL"];
        stock = 60;
        imageUrl = "pullover_hoodie.jpg";
      },
    ),
    (
      4,
      {
        id = 4;
        name = "Cargo Pants";
        description = "Olive green cargo pants with multiple pockets";
        price = 5000;
        category = "Bottoms";
        sizes = ["30", "32", "34", "36"];
        stock = 40;
        imageUrl = "cargo_pants.jpg";
      },
    ),
    (
      5,
      {
        id = 5;
        name = "Denim Jacket";
        description = "Classic blue denim jacket, durable and stylish";
        price = 7000;
        category = "Outerwear";
        sizes = ["S", "M", "L", "XL"];
        stock = 50;
        imageUrl = "denim_jacket.jpg";
      },
    ),
    (
      6,
      {
        id = 6;
        name = "Graphic Tee";
        description = "Art-inspired tee with bold patterns and colors";
        price = 2700;
        category = "Tops";
        sizes = ["S", "M", "L", "XL"];
        stock = 90;
        imageUrl = "graphic_tee.jpg";
      },
    ),
    (
      7,
      {
        id = 7;
        name = "Beanie Hat";
        description = "Warm knit beanie for winter season";
        price = 1200;
        category = "Accessories";
        sizes = ["One Size"];
        stock = 150;
        imageUrl = "beanie_hat.jpg";
      },
    ),
    (
      8,
      {
        id = 8;
        name = "Windbreaker Jacket";
        description = "Lightweight windbreaker for outdoor activities";
        price = 5500;
        category = "Outerwear";
        sizes = ["S", "M", "L", "XL"];
        stock = 70;
        imageUrl = "windbreaker_jacket.jpg";
      },
    ),
  ];

  let products = Map.fromIter<Nat, Product>(productArray.values());
  let contacts = List.empty<ContactMessage>();
  let carts = Map.empty<Principal, [CartItem]>();

  // Product Queries
  public query ({ caller }) func getAllProducts() : async [Product] {
    products.values().toArray().sort(Product.compareByStock);
  };

  public query ({ caller }) func getProductById(id : Nat) : async Product {
    switch (products.get(id)) {
      case (null) { Runtime.trap("Product not found.") };
      case (?product) { product };
    };
  };

  public query ({ caller }) func getProductsByCategory(category : Text) : async [Product] {
    let filtered = products.values().toArray().filter(
      func(p) { p.category == category }
    );
    filtered.sort(Product.compareByPrice);
  };

  // Cart Functions
  public shared ({ caller }) func addToCart(productId : Nat, size : Text, quantity : Nat) : async () {
    switch (products.get(productId)) {
      case (null) { Runtime.trap("Product not found.") };
      case (?product) {
        if (product.stock < quantity) { Runtime.trap("Not enough stock.") };
        let cart = switch (carts.get(caller)) {
          case (null) { [] };
          case (?items) { items };
        };
        let newItem = {
          productId;
          size;
          quantity;
          priceSnapshot = product.price;
        };
        carts.add(caller, cart.concat([newItem]));
      };
    };
  };

  public query ({ caller }) func getCart() : async [CartItem] {
    switch (carts.get(caller)) {
      case (null) { [] };
      case (?items) { items.sort(CartItem.compareByQuantity) };
    };
  };

  public shared ({ caller }) func clearCart() : async () {
    carts.remove(caller);
  };

  // Contact Functions
  public shared ({ caller }) func submitContact(name : Text, email : Text, message : Text) : async () {
    let contact : ContactMessage = {
      name;
      email;
      message;
    };
    contacts.add(contact);
  };

  public query ({ caller }) func getAllContacts() : async [ContactMessage] {
    contacts.toArray().sort(ContactMessage.compareByEmail);
  };
};
