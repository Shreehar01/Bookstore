import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import firstPage from './firstPage/src/firstpage';
import myHomePage from './myHomePage/myHomePage';
import myBooks from './myBooks/myBooks';
import edit from './myBooks/edit';
import deleteit from './myBooks/deleteit';
import add from './myBooks/add';
import mySignOut from './mySignOut/mySignOut';
import history from './history';

const App = ()=>{
  return (
      <div>
        <Router history= {history}>
          <div>
            <Switch>
              <Route path="/" exact component={firstPage} />
              <Route path= "/homepage" exact component= {myHomePage} />
              <Route path= "/mybooks" exact component= {myBooks} />
              <Route path= "/mybooks/edit" exact component= {edit} />
              <Route path= "/mybooks/deleteit" exact component= {deleteit} />
              <Route path= "/mybooks/add" exact component ={add}/>
              <Route path ="/signout" exact component ={mySignOut} />
            </Switch>
          </div>
        </Router>
      </div>
  );
};


export default App;
