import styled from 'styled-components';
import {ReactComponent as svg} from '../../SVG/ebay.svg';


export const Navbar = styled.div`
width: 100%;
background-color: #53A5D4;
`
export const Container = styled.div`
width: 85%;
margin: 0 auto;
`
export const Icons = styled.div``
Icons.SVG = styled(svg)`
width: 48px;

`
Icons.Nav = styled.div`
width: 100%;
height: 70px;
display: flex;
justify-content: space-between;
align-items: center;
`
Icons.Logo = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
padding: 7px 0;
margin-left: 50px;
`
Icons.Logotext = styled.div`
width: 140px;
display: flex;
justify-content: space-between;
padding: 10px;
`
Icons.H2 = styled.h3`
color: #fff;
line-height: 1.2;
font-weight: lighter;
padding: 0 3px;
`
export const Basket = styled.div`
width: 50%;
position: relative;
display: flex;
justify-content: flex-end;
align-items: center;
margin-right: 50px;
`

Basket.Cost = styled.div`
width: 60px;
height: 25px;
background-color: #fff;
border-radius: 7px;
text-align: center;
font-size: 18px;
`
Basket.Text = styled.h3`
color:#fff;
padding: 0 5px;
font-weight: normal;
`

export const Search = styled.div`
width: 100%;
background-color: #f2f2f2;
padding: 10px;

`

Search.Form = styled.form`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
Search.Select = styled.select`
font-size: 16px;
font-weight: normal;
padding: 12px;
padding-right: 12px!important;
border: none;
background-color: #fff;
outline: none;
cursor: pointer;
width: 30%;
margin-right: 50px;
text-indent: 5px;
`
Search.Option = styled.option`
text-transform: uppercase;
font-size: 14px;
cursor: pointer!important;
border:none
`
Search.Input = styled.input`
border: none;
outline: none;
width: 35%;
text-indent: 15px;
padding: 12px;
font-size: 16px;
::placeholder {
    color:black
}
`
Search.Btn = styled.input`
width:10%;
font-size: 16px;
padding:  12px;
color:#fff;
border: none;
background-color: #53A5D4;
cursor: pointer;
outline: none;
box-shadow: 0 2px 5px #53A5D4;
transition: all 0.3s linear;
:active {
    transform: scale(0.9);
}
`