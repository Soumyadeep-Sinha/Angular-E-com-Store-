export interface SignUp {
    name: string,
    email: string,
    password: string
}

export interface Login {
    name: string,
    password: string
}

export interface Seller {
    id: number,
    email: string,
    username: string,
    password: string
}

export interface Category {
    categoryId?: number,
    categoryName: string,
    categoryThumbnail: string,
    categoryRoute: string
}

export interface Product {
    id?: number,
    productName: string,
    productDescription: string,
    thumbnailUrl: string,
    imageUrl1: string,
    imageUrl2: string,
    imageUrl3: string,
    sellerId: number,
    categoryId: number,
    price: number,
    discount: number,
    stock: number
}

export interface User {
    id?: number,
    email: string,
    username: string,
    password: string
}

export interface UserLogin {
    username: string,
    password: string
}

export interface Cart {
    id?: number,
    thumbnailUrl: string,
    productName: string,
    productId: number,
    userId: number,
    price: number,
    quantity: number
}

export interface CheckoutRequest {
    userId: number,
    shippingAddress: string,
    pinCode: string
}