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

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, diplayWorkplaceOptions, showWorkplaceOptionsDialog);

  return (
    <div className="add-workplace">
        <button className="add-workplace-btn" onClick={showWorkplaceOptionsDialog}> 
            +
        </button>
        <div className="workplace-options" style={{display: diplayWorkplaceOptions}} ref={wrapperRef}>
            workplace dialog
        </div>
    </div>
  );
}

function useOutsideAlerter(ref, diplayWorkplaceOptions, showWorkplaceOptionsDialog) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            console.log("here", diplayWorkplaceOptions);
            if (ref.current && !ref.current.contains(event.target) && diplayWorkplaceOptions === "block") {
            
                showWorkplaceOptionsDialog();
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, diplayWorkplaceOptions, showWorkplaceOptionsDialog]);
}

export default AddWorkplace;
