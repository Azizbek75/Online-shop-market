import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const Footer = styled.div`
width: 100%;
`
export const Container = styled.div`
width: 85%;
margin: 0 auto;
`

export const Top = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #EBEBEB;
`
Top.Left = styled.div`
width: 50%;
`

Top.Right = styled.div`
width: 50%;
display: flex;
justify-content: flex-end;

`
export const Ul = styled.ul`
list-style: none;
display: flex;
padding: 15px;
`

Ul.Li = styled.li`
margin-right: 2%;
border-right: 2px solid  #C7C7C7;
padding-right:3%;
:nth-child(5) {
border-right: none;
}
`
export const Link = styled(NavLink)`
text-decoration: none;
font-size: 16px;
`

export const Img = styled.img`
width: 70px;
height: 30px;
margin-left: 1%;
`