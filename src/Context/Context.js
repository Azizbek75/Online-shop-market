import React,{ createContext, useReducer } from 'react';

export const Data = createContext();


    const DataProvider = ({children}) => {

        const reducer = (state,action) => {
            return state;
        }

        const [data,dispatch] = useReducer(reducer,[
            {id:1,path:'/mobile', title:'Mobile & Accssrs',url:'https://api.unsplash.com/search/photos/?client_id=oLyOSFJ0qItGC8WMn9bZvFYF_T9BoRNJyemXF9rE5hI&query=mobile&page=3&count=35'},
            {id:2,path:'/bike', title:'Cycle & Bike',url:'https://api.unsplash.com/search/photos/?client_id=oLyOSFJ0qItGC8WMn9bZvFYF_T9BoRNJyemXF9rE5hI&query=bike&page=2&count=35'},
            {id:3,path:'/clothes', title:'Clothes',url:'https://api.unsplash.com/search/photos/?client_id=oLyOSFJ0qItGC8WMn9bZvFYF_T9BoRNJyemXF9rE5hI&query=clothes&page=3&count=35'},
            {id:4,path:'/kids', title:'Kids & Toys',url:'https://api.unsplash.com/search/photos/?client_id=oLyOSFJ0qItGC8WMn9bZvFYF_T9BoRNJyemXF9rE5hI&query=toys&page=3&count=35'},
            {id:5,path:'/sport', title:'Sport & Health',url:'https://api.unsplash.com/search/photos/?client_id=oLyOSFJ0qItGC8WMn9bZvFYF_T9BoRNJyemXF9rE5hI&query=sport&page=3&count=35'},
            {id:6,path:'/book', title:'Books & Cdc',url:'https://api.unsplash.com/search/photos/?client_id=oLyOSFJ0qItGC8WMn9bZvFYF_T9BoRNJyemXF9rE5hI&query=book&page=3&count=35'},
            {id:7,path:'/auto', title:'Automobile',url:'https://api.unsplash.com/search/photos/?client_id=oLyOSFJ0qItGC8WMn9bZvFYF_T9BoRNJyemXF9rE5hI&query=automobile&page=3&count=35'},
            {id:8,path:'/technology', title:'Technology',url:'https://api.unsplash.com/search/photos/?client_id=oLyOSFJ0qItGC8WMn9bZvFYF_T9BoRNJyemXF9rE5hI&query=technology&page=3&count=35'},   
        ])

        return (
            <Data.Provider value={[data,dispatch]}>
                {children}
            </Data.Provider>
        )
    }

export default DataProvider;