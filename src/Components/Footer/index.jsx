import React from 'react';
import { Footer,Container, Top, Ul, Link,Img,Bottom,Icons } from './style';
import { BrowserRouter as Router } from 'react-router-dom';


const Index = () => {
    return (
        <React.Fragment>
            <Footer>
                <Top>
                  <Container>
                  <Top>
                  <Top.Left>
                    <Ul>
                      <Router>
                      <Ul.Li>
                        <Link to="">About US</Link>
                      </Ul.Li>
                      <Ul.Li>
                        <Link to="">Contact Us</Link>
                      </Ul.Li>
                      <Ul.Li>
                        <Link to="">T & C</Link>
                      </Ul.Li>
                      <Ul.Li>
                        <Link to="">FAQs</Link>
                      </Ul.Li>
                      <Ul.Li>
                        <Link to="">Carrer</Link>
                      </Ul.Li>
                      </Router>
                    </Ul>
                  </Top.Left>
                  <Top.Right>
                    <Img src={'img/visa.png'}/>
                    <Img src={'img/link1.png'}/>
                    <Img src={'img/visa.png'}/>
                    <Img src={'img/link1.png'}/>  
                  </Top.Right>
                  </Top>
                  </Container>          
                </Top>
                <Bottom>
                  <Container>
                   <Bottom.Top>
                   <Icons>
                     <Icons.Item >
                        <Icons.Svg1/>
                     </Icons.Item>
                     <Icons.Item>
                        <Icons.Svg2/>
                     </Icons.Item>
                     <Icons.Item href="https://t.me/azizbeknosirjanov">
                        <Icons.Svg3/>
                     </Icons.Item>
                     <Icons.Item href="https://www.instagram.com/nosirjanovazizbek/">
                        <Icons.Svg4/>
                     </Icons.Item>
                    </Icons>
                   </Bottom.Top>
                   <Bottom.Bottom>
                     <Bottom.Text>
                     Copyright © 2021 CreativeLayers. All Right Reserved.
                     </Bottom.Text>
                   </Bottom.Bottom>
                  </Container>
                </Bottom>
            </Footer>
        </React.Fragment>
    );
};

export default Index;