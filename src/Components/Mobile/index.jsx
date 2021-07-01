import React,{ useState, useEffect} from 'react';
import {Items, Box,Card,Rek,Btn} from './Style';
import { useLocation } from 'react-router';
import axios from 'axios';

const Mobile = () => {

    const [box,setBox] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [countPage,setCountPage] = useState(6);
    const location = useLocation();

    let lastIndex = currentPage * countPage;
    let fisrtIndex = lastIndex - countPage;
    let newBox = box.slice(fisrtIndex,lastIndex);

    useEffect(()=>{
        const get = async() => {
            await axios.get(`${location.state.url}`)
                  .then(res => setBox(res.data.results))
        }
        get()
    },[])


    return (
        <Items>
            <Box>
                {
                    newBox.map(value => (
                        <Card  key={value.id}>
                        <Card.Body>
                           <Card.Img src={value.urls.regular} />
                       </Card.Body>
                       <Card.Footer>
                         <Card.Title>{value.likes}<Card.Icon/></Card.Title>
                              <Card.CostBox>
                             <Card.Cost>Today : 15:30</Card.Cost>
                          </Card.CostBox>
                       </Card.Footer>       
                    </Card>  
                    ))
                }   
                <Btn>
                    <Btn.Prev disabled={currentPage===1? true:false}  onClick={()=>setCurrentPage(currentPage-1)}>Prev</Btn.Prev>
                    <Btn.Next disabled={currentPage===Math.ceil(box.length/countPage)? true:false}  onClick={()=>setCurrentPage(currentPage+1)} >Next</Btn.Next>
                </Btn>
            </Box>
            <Rek>
               <Rek.Box1>
                   <Rek.Img1 src="img/img1.jpg"/>
               </Rek.Box1>
               <Rek.Box2>
                   <Rek.Img2 src="img/img2.jpg"/>
               </Rek.Box2>
               <Rek.Box3>
                   <Rek.Img3 src="img/img3.jpg"/>
               </Rek.Box3>
            </Rek>
        </Items>
    );
};

export default Mobile;