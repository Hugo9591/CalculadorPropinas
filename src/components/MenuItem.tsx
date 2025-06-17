import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem,
  addItem: (item: MenuItem) => void
}

export default function MenuItem({ item, addItem} : MenuItemProps) {

  return (
    <button 
      className=' border-2 border-gray-500 hover:bg-gray-400 hover:text-white p-3 text-lg  rounded-lg flex justify-between w-full'
      onClick={() => addItem( item )}
    >
      <p>{item.name}</p>
      <p className="font-semibold">${item.price}</p>
    </button>
  )
}
