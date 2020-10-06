import React, { useState } from "react";
import AddWorkplace from "./components/AddWorkplace";
import "./App.css";

function App() {
  let [workplaces, modifyWorkplaces] = useState(() => [
    {
      name: "w1",
    },
    {
      name: "w2",
    },
  ]);

  let channels = [
    "announcements",
    "backend",
    "frontend",
    "3d",
    "adminpanel",
    "androidapptasks",
    "development",
    "testing",
    "tribe",
    "webapp",
    "weeklyupdate"
  ];

  let directMessages = [
    "Namar",
    "Anmol",
    "Vijay",
    "Garg",
    "Liza",
    "Nikki",
    "Puri",
    "Gurneet",
    "Viresh",
    "Madaan"
  ];

  let messages = [
    1,
    2,
    3,
    4,
    5,
    3,
    4,
    5
  ];

  let [
    channelItemsContainerVisible,
    changeChannelItemsContainerVisiblilty,
  ] = useState(() => "none");

  let [
    dmItemsContainerVisible,
    changeDmItemsContainerVisiblilty,
  ] = useState(() => "none");

  function toggleItemsContainer() {
    changeChannelItemsContainerVisiblilty((prevState) =>
      prevState == "none" ? "block" : "none"
    );
  }

  function toggleDmItemsContainer() {
    changeDmItemsContainerVisiblilty((prevState) =>
      prevState == "none" ? "block" : "none"
    );
  }

  return (
    <div class="main">
      <div class="workplaces">
        {workplaces.map((x) => {
          return <div className="workplace">{x.name}</div>;
        })}
        <AddWorkplace
          currentWorkplacesCount={workplaces.length}
          addWorkplace={modifyWorkplaces}
        />
      </div>

      <div class="sub-workplace">
        <div className="workplace-header-container">
          <p className="workplace-header-body">Bamboo</p>
        </div>

        <div className="body">
          <div className="workplace-options">
            <div className="workplace-options-item">All unreads</div>
            <div className="workplace-options-item">Threads</div>
            <div className="workplace-options-item">All DMs</div>
            <div className="workplace-options-item">Mentions & reactions</div>
            <div className="workplace-options-item">Saved items</div>
          </div>

          <div className="workplace-body">
            <div className="channels-container">
              <div className="channel-heading" onClick={toggleItemsContainer}>
                <p>- Channels</p>
              </div>
              <div
                className="channel-items-container"
                style={{ display: channelItemsContainerVisible }}
              >
                {channels.map((x) => {
                  return <div className="channel-item">{`# ${x}`}</div>;
                })}
              </div>
            </div>

            <div className="dm-container">
              <div className="dm-heading" onClick={toggleDmItemsContainer}>
                <p>- Direct Messages</p>
              </div>
              <div
                className="dm-items-container"
                style={{ display: dmItemsContainerVisible }}
              >
                {directMessages.map((x) => {
                  return <div className="dm-item">{`# ${x}`}</div>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="message-window">
      <div class="message-window-header">
        <p>announcements</p>
      </div>

      <div class="message-window-body">
        {
          messages.map(x=>{
          return <div key={x} className="message-box">{x}</div>
          })
        }
      </div>

      <div class="message-window-input-container">
        <div class="message-window-input">
        a
        </div>
      </div>

      </div>
    </div>
  );
}

export default App;
