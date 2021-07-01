import React from 'react';
import {Container,Navbar,Icons,Basket,Search} from './Style';

export default () => {
    return (
        <Navbar>
         <Container>
                <Icons.Nav>
                   <Icons.Logo>
                     <Icons.SVG/>
                     <Icons.Logotext>
                        <Icons.H2 >Online</Icons.H2>
                            <Icons.H2>/</Icons.H2>
                        <Icons.H2 >Shopping</Icons.H2>
                     </Icons.Logotext>
                   </Icons.Logo>
                   <Basket>
                       <Basket.Text>
                           Cost :
                       </Basket.Text>
                       <Basket.Cost>0.00</Basket.Cost>
                   </Basket>
                </Icons.Nav>
         </Container>
         <Search>
            <Container>
                <Search.Form>
                    <Search.Select>
                        <Search.Option >Select City</Search.Option>
                        <Search.Option value={'Toshkent'}>Toshkent</Search.Option>
                        <Search.Option value={'Namangan'}>Namangan</Search.Option>
                        <Search.Option value={'Andijon'}>Andijon</Search.Option>
                        <Search.Option value={'Farg`ona'}>Farg`ona</Search.Option>
                    </Search.Select>
                    <Search.Select>
                        <Search.Option >Search Filter</Search.Option>
                        <Search.Option value={'Mobile'}>Mobile</Search.Option>
                        <Search.Option value={'Cycle'}>Cycle</Search.Option>
                        <Search.Option value={'Sport'}>Sport</Search.Option>
                    </Search.Select>
                    <Search.Input type="search" placeholder={"Enter product and Search over shop"}/>
                    <Search.Btn type="submit" value="Search"/>
                </Search.Form>
            </Container>
        </Search>
        </Navbar>
    )
}
