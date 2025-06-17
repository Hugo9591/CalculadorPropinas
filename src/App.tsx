import MenuItem from "./components/MenuItem"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";

function App() {

  // console.log(menuItems)
  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder();

  return (
    <>
      <header className="bg-gray-700 text-white py-5">
        <h1 className="text-center text-4xl font-bold">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className=" max-w-7xl mx-auto py-10 grid md:grid-cols-2">

        <div className='p-5'>
          <h2 className='font-medium text-4xl'>Menú</h2>

          <div className='mt-10 space-y-3'>
            {menuItems.map( item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              /> 
            ))}
          </div>
          

        </div>

        <div className="border border-dashed border-slate-500 p-5 rounded-lg space-y-10">
            {order.length ? ( //Prevenir que se rendericen ciertos componentes si no hay nada
              <>
                <OrderContents
                  order={order}
                  removeItem={removeItem}
                />
                <TipPercentageForm 
                  setTip={setTip}
                  tip={tip}
                />
                <OrderTotals 
                  order={order}
                  tip={tip}
                  placeOrder={placeOrder}
                />
              </>
            ) : (
              <p className="text-center font-black w-full text-gray-400">La orden esta vacia</p>
            )}
 
          </div>

      </main>
    </>
  )
}

export default App
