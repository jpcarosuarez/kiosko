
const initialState = {
    items: [], 
    cantidad: 0,
    freeShhipping: 4000,
    cuotas: 3,

    
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AGREGAR ITEM' :
            return{
                ...state,
                items: [...state.items, action.payload]
            }
        case 'SUMAR_ITEMS_CONTADOR':
            return {
                ...state,
                cantidad: state.cantidad + action.payload
            }
        default: return state;
    }
}

export default reducer;