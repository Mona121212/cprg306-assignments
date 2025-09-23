export default function Item(props) {
   
   let {name, quantity, category} = props;
    return (
        <li className="flex items-center p-4 bg-slate-200 max-w-sm m-2">
           <div className="flex-1">
                <div className="text-lg font-semibold ml-4">{name}</div>
                <div className="text-lg font-semibold ml-4 ">Category: {category}</div> 
                <div className="text-lg font-semibold ml-4">   Quantity: {quantity}</div>
            </div>
            
        </li>
        

    )
}