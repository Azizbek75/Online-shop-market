import styled from 'styled-components';
import {ReactComponent as svg} from '../../SVG/heart.svg';
import {ReactComponent as svg1} from '../../SVG/close.svg';


export const Items = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding-top:10px ;
min-height: 650px;
`

export const Box = styled.div`
width: 75%;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`
export const Card = styled.div`
width: 32.5%;
height: 240px;
display: flex;
justify-content: center;
flex-direction: column;
padding: 7px;
border: 1px solid #f2f2f2;
margin-bottom: 7px;
`
Card.Body = styled.div`
width: 100%;
min-height: 180px;
text-align: center;
border: 1px solid #f2f2f2;
padding: 5px;
display: flex;
justify-content: center;
align-items: center;
`
Card.Img = styled.img`
width: 100%;
height: 100%;
:hover {
    cursor: pointer;
}
`
Card.Footer = styled.div`
width: 100%;
height: 30%;
padding: 5px 7px;
`
Card.Title = styled.h1`
text-align: center;
font-size: 18px;
display: flex;
justify-content: center;
align-items: center;
`

Card.Cost = styled.h5`
width: 100%;
color:#555;
padding: 5px 0 0 3px;
text-align: right!important;
`

Card.CostBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

Card.Icon = styled(svg)`
width: 21px;
height: 21px;
cursor: pointer;
path{
        fill:red;
}
margin-left: 5px;
`

export const Rek = styled.div`
width: 23%;
height: 650px;
display: flex;
justify-content: space-between;
flex-direction: column;



`
Rek.Box1 = styled.div`
height: 58%;
`
Rek.Img1 = styled.img`
width: 100%;
height: 100%;
`

Rek.Box2 = styled.div`
height: 20%;
`
Rek.Img2 = styled.img`
width: 100%;
height: 100%;
`

Rek.Box3 = styled.div`
height: 20%;
`
Rek.Img3 = styled.img`
width: 100%;
height: 100%;
`

export const Btn = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
Btn.Prev = styled.button`
padding: 15px 20px;
outline: none;
border: none;
background-color: lightblue;
border-radius: 4px;
margin-right: 1%;
cursor: pointer;
:hover {
    background-color: transparent;
    border: 1px solid lightblue;
}
font-size: 16px;
`
Btn.Next = styled.button`
padding: 15px 20px;
outline: none;
border: none;
background-color: lightblue;
border-radius: 4px;
cursor: pointer;
:hover {
    background-color: transparent;
    border: 1px solid lightblue;
}
font-size:16px;
`

export const Modal = styled.div`
width: 100%;
height: 100vh;
background-color: rgba(0,0,0,0.7);
position: fixed;
bottom: 0;
top: 0;
left:0;
right: 0;
display: flex;
justify-content:center;
align-items: center;
display: ${({hide})=>hide? "flex":"none"};
`
Modal.Content = styled.div`
width: 400px;
height: 400px;
border-radius: 8px;
background-color: #fff;
position: relative;
`
Modal.Box = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 10px 0 7px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
Modal.Img = styled.img`
width: 200px;
height: 150px;
`
Modal.Svg1 = styled(svg1)`
width: 20px;
cursor: pointer;
position: absolute;
top:3%;
right: 5%;
path{
    fill:gray;
}
`
Modal.Title = styled.h3`

`

Modal.Text = styled.p`
padding: 10px;
`
Modal.Status = styled.div`
width: 100%;
height: 50px;
padding: 5px;
display: flex;
justify-content: space-between;
`
Modal.Left = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 17px;
`
Modal.Right = styled.div`
width: 45%;
display: flex;
justify-content: flex-end;
align-items: center;
font-size: 17px;
`
Modal.Cost = styled.div`
min-width: 40px;
background-color: green;
border-radius: 4px;
color: #fff;
text-align: center;
margin: 0 2%;
font-size: 18px;
`

Modal.Progres = styled.div`
width: 120px;
background-color: black;
border-radius: 8px;
display:flex;
overflow: hidden;
`
Modal.Decrement = styled.button`
padding: 5px;
background-color: green;
width: 32%;
text-align: center;
outline: none;
border: none;
font-size: 18px;
color:#fff;
cursor: pointer;
`
Modal.Result = styled.div`
width: 40%;
color:#fff;
font-size: 17px;
background-color: gray;
display: flex;
justify-content: center;
align-items: center;
`

Modal.Increment = styled.button`
padding: 5px;
background-color: green;
width: 32%;
text-align: center;
outline: none;
border: none;
font-size: 18px;
color:#fff;
cursor: pointer;
`

Modal.Footer = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
padding:  10px;
border-top: 1px solid lightgray;
`
Modal.FooterBuy = styled.button`
padding: 10px 20px;
background-color: cyan;
color:white;
font-size: 16px;
border: none;
outline: none;
border-radius: 4px;
cursor: pointer;
transition: all 0.3s ease;
:active{
    transform: scale(0.9);
}
:hover {
    background-color: transparent;
    border: 1px solid cyan;
    color:cyan
}
box-sizing: border-box;
`
Modal.FooterBy = styled.button`
padding: 10px 20px;
background-color: cyan;
color:white;
font-size: 16px;
border: none;
outline: none;
border-radius: 4px;
cursor: pointer;
transition: all 0.3s ease;
:active{
    transform: scale(0.9);
}
:hover {
    background-color: transparent;
    border: 1px solid cyan;
    color:cyan
}
box-sizing: border-box;
margin-right: 2%;
`
