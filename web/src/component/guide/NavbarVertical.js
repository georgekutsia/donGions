import React from 'react'

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
function NavbarVertical({showTheInfo}) {
  return (
    <div>
<div className="iconBar">
  <a className="active" href="#maimen"><i className="fa fa-home"></i></a> 
  <a onClick={showTheInfo} href="#maimen">life<i className="fa fa-search"></i></a> 

</div>
    </div>
  )
}

export default NavbarVertical