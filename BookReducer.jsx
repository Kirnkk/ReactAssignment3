export const initVal= [{
        bookName:'Tom Jones',
        author:'Henry Fielding',
        add_date:'7-12-2023'
    },
    {
        bookName:"Oliver Twist",
        author:'Charles Dickens',
        add_date:'07-12-2023'
    },
    {
        bookName:"The Jungle Book",
        author:'Rudyard Kipling',
        add_date:'07-12-2023'
    },
    {
        bookName:"Pride and Prejudice",
        author:'Jane Austen',
        add_date:'07-12-2023'
    },
]


export const BookReducer =(state=initVal,action)=>{
    switch (action.type) {
        case "ADD":{
            return[...state,action.payload]
        }
        case "REMOVE":{
            alert('Are you sure to Delete Book?')
            return state.filter((i,index)=>index!==action.index);
        }
        default:return state;

    }
}