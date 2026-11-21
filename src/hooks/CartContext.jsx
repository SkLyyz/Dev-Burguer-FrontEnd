import { useContext, createContext, useState, useEffect } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    function updateLocalStorage(products) {
        localStorage.setItem('devburguer:cartInfo', JSON.stringify(products));
    }

    const putProductInCart = (product) => {
        /* 
            Regras de negócio:
                PRODUTO CHEGOU
                -SE SIM
                    Aumentar a quantidade do produto no carrinho
                -SE NÃO
                    Adicionar o produto no carrinho com quantidade 1
        */

        const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

        let newProductsInCart = [];
        if(cartIndex >= 0) {
            newProductsInCart = cartProducts

            newProductsInCart[cartIndex].quantity += 1;

            setCartProducts(newProductsInCart);
        } else {
            product.quantity = 1;
            newProductsInCart = [...cartProducts, product];

            setCartProducts(newProductsInCart);
        }

        updateLocalStorage(newProductsInCart)
    }

    const clearCart = () => {
        setCartProducts([]);

        updateLocalStorage([]);
    }

    const deleteProduct = (productId) => {
        const newCart = cartProducts.filter((prd) => prd.id !== productId);

        setCartProducts(newCart);
        updateLocalStorage(newCart);
    }

    const increaseProduct = (productId) => {
        const newCart = cartProducts.map((prd) => {
            return prd.id === productId ? {...prd, quantity: prd.quantity + 1} : prd;
        })

        setCartProducts(newCart);
        updateLocalStorage(newCart);
    }

    const decreaseProduct = (productId) => {
        /*
            Regras de negócio:
            Encontrar o item -> Tirar 1 de quantidade
            SE o item for igual a 1 de quantity
                - Não fazer nada
                - Deletar o produto
        */
        const cartIndex = cartProducts.findIndex((prd) => prd.id === productId)

        if(cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map((prd) => {
                return prd.id === productId ? {...prd, quantity: prd.quantity - 1} : prd;
            })

            setCartProducts(newCart);
            updateLocalStorage(newCart);
        } else {
            deleteProduct(productId);
        }
    }

    useEffect(() => {
        const clienCartData = localStorage.getItem('devburguer:cartInfo');

        if(clienCartData) {
            setCartProducts(JSON.parse(clienCartData));
        }
    }, [])

    return (
        <CartContext.Provider value={{cartProducts, putProductInCart, clearCart, deleteProduct, increaseProduct, decreaseProduct}}>{children}</CartContext.Provider>
    )

}

export const useCart = () => {
    const context = useContext(CartContext);

    if(!context) {
        throw new Error("useCart must be a valid context");
    }

    return context;
}