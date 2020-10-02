import React, { useState, useRef, useEffect } from 'react';
 import '../styles/AddWorkplace.css';

function AddWorkplace(props) {

    let [diplayWorkplaceOptions, changeWorkplaceOptionsVisibility] = useState(()=>"none");

    // let nextWorkplace = "w"+ (props.currentWorkplacesCount + 1);

    // function addWorkplace(){
    //     props.addWorkplace((prevWorkplaces)=>[...prevWorkplaces, {name: nextWorkplace}]);
    // }

    function showWorkplaceOptionsDialog(){
        changeWorkplaceOptionsVisibility((prevState)=> prevState==="none"?"block":"none");
    }

    const btnRef = useRef(null);

    const optionsRef = useRef(null);
    useOutsideAlerter(optionsRef, btnRef, diplayWorkplaceOptions, showWorkplaceOptionsDialog);

  return (
    <div className="add-workplace">
        <button className="add-workplace-btn" onClick={showWorkplaceOptionsDialog} ref={btnRef}> 
            +
        </button>
        <div className="add-workplace-options" style={{display: diplayWorkplaceOptions}} ref={optionsRef}>
            workplace dialog
        </div>
    </div>
  );
}

function useOutsideAlerter(optionsRef, btnRef, diplayWorkplaceOptions, showWorkplaceOptionsDialog) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            console.log("here", diplayWorkplaceOptions);
            if (optionsRef.current && !optionsRef.current.contains(event.target) && !btnRef.current.contains(event.target) && diplayWorkplaceOptions === "block") {
                showWorkplaceOptionsDialog();
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [optionsRef, btnRef, diplayWorkplaceOptions, showWorkplaceOptionsDialog]);
}

export default AddWorkplace;
