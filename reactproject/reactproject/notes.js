npm install --save react-router-dom
import {BrowserRouter, Route, Link} from 'react-router-dom';
cosnt pageone=()=>{
  return (<div>
  PageOne
  <Link to="/pagetwo"> Navigate to Page Two</Link>
  </div>
);
};



<BrowserRouter>
<div>
<Route path="/" exact component= {PageOne} />
</div>
</BrowserRouter>


in just the header import link
Link to
header was moved into browserrouter
