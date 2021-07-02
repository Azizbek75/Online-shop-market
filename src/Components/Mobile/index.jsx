import React,{ useState, useEffect} from 'react';
import {Items, Box,Card,Rek,Btn,Modal } from './Style';
import { useLocation } from 'react-router';
import axios from 'axios';

const Mobile = () => {

    const [box,setBox] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [countPage,setCountPage] = useState(6);
    const location = useLocation();
    const [modalData,setModalData] = useState('');
    const [hide,setHide] = useState(false);
    const [number,setNumber] = useState(0);

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

    const modal = (value) => {
       setModalData(value);
       setHide(!hide)
    }

    return (
        <Items>
            <Modal hide={hide} > 
                <Modal.Content>
                  <Modal.Svg1 onClick={()=>{setHide(!hide)}}/>
                    <Modal.Box>
                            <Modal.Img src={modalData!=="" && modalData.urls.regular}/>
                    </Modal.Box>
                    <Modal.Box>
                        <Modal.Title>
                            Name Product
                        </Modal.Title>
                        <Modal.Text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, nulla.
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                        </Modal.Text>
                    </Modal.Box>
                    <Modal.Status>
                        <Modal.Left>
                            Number : 
                        <Modal.Progres>
                            <Modal.Decrement onClick={()=> number!==0 && setNumber(number-1)} >-</Modal.Decrement>
                            <Modal.Result>{number}</Modal.Result>
                            <Modal.Increment onClick={()=>setNumber(number+1)} >+</Modal.Increment>
                        </Modal.Progres>
                        </Modal.Left>
                        <Modal.Right>
                            Cost : 
                            <Modal.Cost>
                                {number}$
                            </Modal.Cost>
                        </Modal.Right>
                    </Modal.Status>
                    <Modal.Footer>
                        <Modal.FooterBy>By to Card</Modal.FooterBy>
                      <Modal.FooterBuy>Buy</Modal.FooterBuy>
                     </Modal.Footer>
                </Modal.Content>
               
            </Modal>
            <Box>
                {
                    newBox.map(value => (
                        <Card  key={value.id}>
                        <Card.Body>
                            <Card.Img onClick={()=>modal(value)} src={value.urls.regular} />
                       </Card.Body>
                       <Card.Footer>
                         <Card.Title>{value.likes}<Card.Icon/></Card.Title>
                              <Card.CostBox>
                             <Card.Cost >Today : 15:30</Card.Cost>
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