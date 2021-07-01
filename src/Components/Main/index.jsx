import React, { useContext } from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import { Mains,Container,Categories,Icons } from './Style';
import Mobile from '../Mobile';
import {Data} from '../../Context/Context';

const Main = () => {
    const [data,dispatch] = useContext(Data);
    return (
        <Container>
            <Mains>
           <Router>
                <Categories> 
                <Mains.H1>Categories</Mains.H1> 
                      <hr/>
                    <hr/>    
                  <Mains.Ul>
                       {
                           data.map(value=>{
                               return(
                                   <React.Fragment key={value.id}>
                                   <Mains.Li>
                                       <Mains.Link  activeClassName="X" activeStyle={{color:'blue'}} to={{
                                           pathname:value.path,
                                           state:value
                                        }}>
                                           <Icons/>
                                           {value.title}
                                       </Mains.Link>
                                   </Mains.Li>
                                   <hr/>
                                   </React.Fragment>
                               )
                            })
                        }
                    </Mains.Ul>
                </Categories>
                    <Mains.Box>
                      <Switch>
                          
                      {
                          data.map(value=>{
                              return <Route  key={value.id} path={value.path}>
                                  <Mobile/>
                              </Route>
                            })
                        }
                      </Switch>
                    </Mains.Box>
                        </Router>
            </Mains>
            
        </Container>
    );
};

export default Main;