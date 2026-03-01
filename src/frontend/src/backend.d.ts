import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface CartItem {
    priceSnapshot: bigint;
    size: string;
    productId: bigint;
    quantity: bigint;
}
export interface ContactMessage {
    name: string;
    email: string;
    message: string;
}
export interface Product {
    id: bigint;
    name: string;
    description: string;
    sizes: Array<string>;
    stock: bigint;
    imageUrl: string;
    category: string;
    price: bigint;
}
export interface backendInterface {
    addToCart(productId: bigint, size: string, quantity: bigint): Promise<void>;
    clearCart(): Promise<void>;
    getAllContacts(): Promise<Array<ContactMessage>>;
    getAllProducts(): Promise<Array<Product>>;
    getCart(): Promise<Array<CartItem>>;
    getProductById(id: bigint): Promise<Product>;
    getProductsByCategory(category: string): Promise<Array<Product>>;
    submitContact(name: string, email: string, message: string): Promise<void>;
}
