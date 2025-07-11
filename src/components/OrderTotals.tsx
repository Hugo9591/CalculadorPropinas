import { useCallback } from "react"
import type{ OrderItem } from "../types" 
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotals({order, tip, placeOrder} : OrderTotalsProps) {

    const subtotalAmount = useCallback(() => order.reduce( (total, item) => total + (item.quantity * item.price), 0 ) , [order])
    const tipAmount = useCallback(() => subtotalAmount() * tip, [tip, order])
    const totalAmount = useCallback(() => subtotalAmount() + tipAmount(), [tip, order])

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-medium text-2xl">Totales y Propina:</h2>
                <p>Subtotal a pagar: {''}
                    <span className="font-bold">{ formatCurrency(subtotalAmount()) }</span>
                </p>
                <p>Propina: {''}
                    <span className="font-bold">{ formatCurrency(tipAmount()) }</span>
                </p>
                <p>Total a Pagar: {''}
                    <span className="font-bold">{ formatCurrency(totalAmount()) }</span>
                </p>
            </div>

            <button
                className="w-full bg-gray-950 hover:bg-gray-600 rounded p-3 uppercase text-white font-bold mt-10 disabled:opacity-10" 
                disabled={totalAmount() === 0}
                onClick={placeOrder}
            >
                Guardar Orden
            </button>
        </>
    )
}
