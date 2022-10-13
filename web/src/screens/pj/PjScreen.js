import React from 'react'
import tagcloud from "https://cdn.skypack.dev/TagCloud@2.2.0";
import { SwordsBall } from '../../component';




function PjScreen() {
  return (
    <div>
    <h2>personaje screensss</h2>
    <div className="cloud container-fluid ">
			<div className="row min-vh-100 justify-content-center align-items-center">
				<div className="col-5">
					<span className="sphere text-info"></span>
				</div>
			</div>
		</div>
    </div>
  )
}

// const language = [
//   'Quiero',
//   'Sustituir',
//   'Esto',
//   'Por',
//   'VUE JS',
//   'REACT JS',
//   'Imágenes',
//   'SASS',
//   'BOOTSTRAP',
//   'JQUERY',
//   'JAVA',
//   'KOTLIN',
//   'MONGODB',
//   'FIGMA',
//   'AdobeXD',
//   'LIBRARIES',
// ];

// tagcloud('.sphere', language, {
//   radius: 200,
//   maxspeed: 'fast',
//   initSpeed: 'fast',
//   direction: 135,
//   keep: true,
// });
export default PjScreen