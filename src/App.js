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

  let [channelItemsContainerVisible, changeChannelItemsContainerVisiblilty ] = useState(()=>"none");

  function toggleItemsContainer(){
    changeChannelItemsContainerVisiblilty((prevState)=> prevState=="none"?"block":"none");
  }

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

            <div className="workplace-header-container">
              <p className="workplace-header-body">Bamboo</p>
            </div>



            <div className="workplace-options">
              <div className="workplace-options-item">
              All unreads
              </div>
              <div className="workplace-options-item">
              Threads
              </div>
              <div className="workplace-options-item">
              All DMs
              </div>
              <div className="workplace-options-item">
              Mentions & reactions
              </div>
              <div className="workplace-options-item">
              Saved items
              </div>
            </div>


            <div className="workplace-body">

              <div className="channels-container">
                <div className="channel-heading" onClick={toggleItemsContainer}>
                  <p>Channels</p>
                </div>
                <div className="channel-items-container" style={{display: channelItemsContainerVisible}}>
                  <div className="channel-item">
                    1
                  </div>
                  <div className="channel-item">
                    2
                  </div>
                  <div className="channel-item">
                    3
                  </div>
                </div>
              </div>

            </div>
        </div>
        <div class="message-window">
           message-window
        </div>
    </div>
  );
}

export default App;
