import styled from 'styled-components';
import {ReactComponent as svg} from '../../SVG/heart.svg';


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
color:#555;
padding: 5px 0 0 3px;
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