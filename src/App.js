import React, { useState } from 'react';
import AddWorkplace from './components/AddWorkplace'
import './App.css';

function App() {
  let [workplaces, modifyWorkplaces] = useState(()=>[
    {
      name: "w1"
    },{
      name: "w2"
    }
  ]);
  
  return (
    <div class="main">
        <div class="workplaces">
            {
              workplaces.map(x=>{
               return <div className="workplace">
                  {x.name}
                </div>
              })
            }
            <AddWorkplace currentWorkplacesCount={workplaces.length} addWorkplace={modifyWorkplaces} />
        </div>

        <div class="sub-workplace">
            sub-workplace
        </div>
        <div class="message-window">
           message-window
        </div>
    </div>
  );
}

export default App;
