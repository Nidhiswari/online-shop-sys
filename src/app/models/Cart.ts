import { Product } from "./Products"

export class CartItem {
    addedOn : Date
    quantity : number
    product : Product
    totalPrice : Number
}