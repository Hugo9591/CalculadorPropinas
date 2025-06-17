import { useState } from "react"
import type { OrderItem, MenuItem } from "../types";

export default function useOrder(){

    const [order, setOrder] = useState<OrderItem[]>([]);
    const [ tip, setTip ] = useState(0);

    const addItem = (item : MenuItem)=> {
        // console.log(item)
        const itemExist = order.find( orderItem => orderItem.id === item.id)
        if(itemExist){
            //Encontrar cual es el elemento que el usuario esta agregando
            const updateOrder = order.map( orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1}     : orderItem)
            setOrder(updateOrder)

        }else{
            const newItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }

    //Eliminar Elementos
    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter( item => item.id !== id ))
    }

    //Reiniciar Orden
    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return{
        order,
        tip,
        setTip,
        addItem, 
        removeItem,
        placeOrder
    }
}