import styled from 'styled-components';
import { ReactComponent as svg } from '../../SVG/right-arrow.svg';
import { NavLink } from 'react-router-dom';


export const Container = styled.div`
width: 85%;
margin: 0 auto;
`

export const Icons = styled(svg)`
width: 10px;
height: 10px;
`
export const Mains = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: 35px 0;
min-height: 550px;
`
export const Categories = styled.div`
width: 19%;
height: 550px;
`

Mains.Ul = styled.ul`
list-style: none;
margin-top:10px;
`
Mains.H1 = styled.h1`
font-size: 26px;
padding: 0 7px 10px;
padding-top: 0;
letter-spacing: 2px;
`

Mains.Li = styled.li`
font-size: 16px;
letter-spacing: 2px;
padding: 15px 9px 10px 5px;
cursor: pointer;
`
Mains.Box = styled.div`
width: 79%;
`

Mains.Link = styled(NavLink)`
text-decoration: none;
color:black;
padding-bottom: 10px !important;
transition: all 0.3s ease;
:hover {
    margin-left: 12px;
    color:blue;
}
`

