import React from 'react'

function LineConect({positioningLine, colorLine, heightLine, widthLine}) {
  return (
    <div className='line-conections' style={{margin:`${positioningLine}`, borderColor:`${colorLine}`, height:`${heightLine}`, width:`${widthLine}`}}>line connect</div>
  )
}

export default LineConect