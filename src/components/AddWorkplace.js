import React from 'react';
 import '../styles/AddWorkplace.css';

function AddWorkplace(props) {

    let nextWorkplace = "w"+ (props.currentWorkplacesCount + 1);

    function addWorkplace(){
        props.addWorkplace((prevWorkplaces)=>[...prevWorkplaces, {name: nextWorkplace}]);
      }

  return (
    <div className="add-workplace">
        <button className="add-workplace-btn" onClick={addWorkplace}> 
            +
        </button>
    </div>
  );
}

export default AddWorkplace;
