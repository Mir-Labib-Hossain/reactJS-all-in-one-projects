import React from 'react'

function PageBtn(props) {
  
    return (
      <div>
        <li className="page-item">
          <button className="page-link btn" disabled={props.page === props.btnVal} onClick={()=>props.pagination(props.btnVal)}>
            {props.btnVal}
          </button>
        </li>
      </div>
    );
}
export default PageBtn
