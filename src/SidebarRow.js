import React from 'react'
import "./SidebarRow.css"


function SidebarRow ({ selected,Icon , title}) {
  return (
    <div className= {`sidebar-row ${selected && "selected"}`}>
        
        <Icon className="sidebarrow-icon "/>
      <h2 className='sidebarrow-title'>{title}</h2>
    </div>
  )
}

export default SidebarRow;
