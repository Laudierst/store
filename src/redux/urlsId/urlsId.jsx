import { createSlice } from "@reduxjs/toolkit";
//import { toast } from "react-toastify"

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    tmMedidas: localStorage.getItem("tmMedidas") ? JSON.parse(localStorage.getItem("tmMedidas")) : [],
    tmCores: localStorage.getItem("tmCores") ? JSON.parse(localStorage.getItem("tmCores")) : [],
    idDescription: localStorage.getItem("idDescription") ? JSON.parse(localStorage.getItem("idDescription")) : [],
    cartTotalQuantyti: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart(state, action) {

            const itemsIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (itemsIndex >= 0) {
                state.cartItems[itemsIndex].cartQuantity += 1
                /*toast.info(`${action.payload.name} ja ta no carrinho, agora são ${state.cartItems[itemsIndex].cartQuantity}`, {
                    position: "bottom-left"
                })*/
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct)
                /*toast.success(`${action.payload.name} adicionado ao carrimho`, {
                    position: "bottom-left"
                })*/
            }
            
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        decrementCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (cartItem) => cartItem.id === action.payload.id
            )
            //console.log(state.cartItems, action.payload.id)
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (cartItem) => cartItem.id !== action.payload.id
                    )
                    
                    state.cartItems = nextCartItems
                }
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

        },

        addCor(state, action) {

            const itemsIndex = state.tmCores.findIndex((item) => item.id === action.payload.id)
            if (itemsIndex >= 0) {
                state.tmCores[itemsIndex].tmCores += 1
                /*toast.info(`${action.payload.name} ja ta no carrinho, agora são ${state.tmCores[itemsIndex]}`, {
                    position: "bottom-left"
                })*/
            } else {
                const tempProduct = { ...action.payload};
                state.tmCores.push(tempProduct)
                /*toast.success(`${action.payload} adicionado ao carrimho`, {
                    position: "bottom-left"
                })*/
            }
            localStorage.setItem("tmCores", JSON.stringify(state.tmCores))
        },

        addTm(state, action) {
            
            const itemsIndex = state.tmMedidas.findIndex((item) => item.id === action.payload.id)

            /*if (state.tmMedidas[itemsIndex].cartQuantity > 1) {
                state.tmMedidas[itemsIndex].cartQuantity -= 1;
            }*/

            if (itemsIndex >= 0) {
                state.tmMedidas[itemsIndex].tmMedidas += 1
                /*toast.info(`${action.payload.name} ja ta no carrinho, agora são ${state.tmCores[itemsIndex]}`, {
                    position: "bottom-left"
                })*/
            } else {
                const tempProduct = { ...action.payload};
                state.tmMedidas.push(tempProduct)
                /*toast.success(`${action.payload} adicionado ao carrimho`, {
                    position: "bottom-left"
                })*/
            }
            localStorage.setItem("tmMedidas", JSON.stringify(state.tmMedidas))
        },

        
        removeCores(state, action) {
            const id = localStorage.getItem("id")
            
            if(state.tmCores.id === id){
                
            }else{
                state.tmCores = []
                localStorage.setItem("tmCores", JSON.stringify(state.tmCores))
                /*toast.error(`${action.payload.cor} Removido`, {
                    position: "bottom-left"
                })*/
            }

        },

        removeCores2(state, action) {
            const nextCores = state.tmCores.filter(
                (tmCores) => tmCores.id !== action.payload.id
            )

            state.tmCores = nextCores;
            localStorage.setItem("tmCores", JSON.stringify(state.tmCores))

            /*toast.error(`${action.payload.cor} Removido`, {
                position: "bottom-left"
            })*/
        },

        addDecription(state, action) {
            
            const itemsIndex = state.idDescription.findIndex((item) => item.id === action.payload.id)

            /*if (state.tmMedidas[itemsIndex].cartQuantity > 1) {
                state.tmMedidas[itemsIndex].cartQuantity -= 1;
            }*/

            if (itemsIndex >= 0) {
                state.idDescription[itemsIndex].idDescription += 1
                /*toast.info(`${action.payload.name} ja ta no carrinho, agora são ${state.tmCores[itemsIndex]}`, {
                    position: "bottom-left"
                })*/
            } else {
                const tempProductId = { ...action.payload};
                state.idDescription.push(tempProductId)
                /*toast.success(`${action.payload} adicionado ao carrimho`, {
                    position: "bottom-left"
                })*/
            }
            localStorage.setItem("idDescription", JSON.stringify(state.idDescription))
        },
       
        cauculateTotal(state, action) {
            let {total, quantity} = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQuantity } = cartItem;
                    const itemTotal = price * cartQuantity;

                    cartTotal.total += itemTotal
                    cartTotal.quantity += cartQuantity

                    return cartTotal
                }, 
                {
                    total: 0,
                    quantity: 0,
                }
                
            )
            state.cartTotalQuantyti = quantity;
            state.cartTotalAmount = total;
        },

        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.id
            )

            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

            /*toast.error(`${action.payload.name} Removido do carrimho`, {
                position: "bottom-left"
            })*/
        },

        clearCart(state, action){
            state.cartItems = []
            /*toast.error("Cartt cleared", {
                position: "bottom-left"
            })*/
            localStorage.getItem("cartItems", JSON.stringify(state.cartItems))
        },
    }
})

export const { addCart, removeFromCart, decrementCart, cauculateTotal, clearCart, addCor, addTm, removeCores, addDecription } = cartSlice.actions;

export default cartSlice.reducer;

