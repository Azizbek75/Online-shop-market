import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {ReactComponent as svg1} from '../../SVG/facebook.svg'
import {ReactComponent as svg2} from '../../SVG/instagram.svg'
import {ReactComponent as svg3} from '../../SVG/telegram.svg'
import {ReactComponent as svg4} from '../../SVG/twitter.svg'

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
export const Bottom = styled.div`
width: 100%;
display: flex;
flex-direction: column;
padding: 15px 0;
background-color: #F8F8F8;
`
Bottom.Top = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
export const Icons = styled.div`
width: 100%;
display: flex;
justify-content: center;
`
Icons.Item = styled.a`
padding: 7px;
border: 1px solid #808080;
border-radius: 50%;
margin-right:1%;
display: flex;
justify-content: center;
align-items: center;
:hover{
    box-shadow:0px 0px 5px blue;
}
`

Icons.Svg1 = styled(svg1)`
width: 25px;
height: 25px;
cursor: pointer;
path{
    fill:#808080;
}

`
Icons.Svg2 = styled(svg2)`
width: 25px;
height: 25px;
cursor: pointer;
path{
    fill:#808080;
}

`
Icons.Svg3 = styled(svg3)`
width: 25px;
height: 25px;
cursor: pointer;
path{
    fill:#808080;
}
`
Icons.Svg4 = styled(svg4)`
width: 25px;
height: 25px;
cursor: pointer;
path{
    fill:#808080;
}
`
Bottom.Bottom = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 20px 0;
`

Bottom.Text = styled.p`
width: 60%;
font-size: 18px;
color:grey;
text-align:center;
`