import React from 'react';
import Dashboard from './Dashboard';
import Navbar from './Navbar';


function App(){

        return (
            <div>
                <Navbar/>
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                
                  <Dashboard/>
               
             </div>
            </div>  
        </div>  
        );
    }
 
export default App