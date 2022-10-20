import {Navigate, NavLink, Route, Routes} from 'react-router-dom'
import {NavBar} from './component';
import { PjDetailScreen, PjScreen, FrontpageScreen, NotesScreen, 
  RegisterScreen, ShopScreen, RuleScreen,  NoteDetailScreen, LoginScreeen, EventsScreen} from "./screens"
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './context/AuthContext';
// import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'


function AuthGuard({ children }) {
  const { pj } = useContext(AuthContext);
  if (!pj) {
    console.log("no estás autenticado amigo")
    return <Navigate to="/authenticate" />;
  }
  return children;
}
// neonCursor({
//   el: document.getElementById('cursor-neon'),
//   shaderPoints: 4,
//   curvePoints: 6,
//   curveLerp: 0.5,
//   radius1: 2,
//   radius2: 1,
//   velocityTreshold: 1,
//   sleepRadiusX: 30,
//   sleepRadiusY: 30,
//   sleepTimeCoefX: 0.0025,
//   sleepTimeCoefY: 0.0025
// })
function App() {
  const value = useContext(AuthContext)

  return (
    <div className="App" id="cursor-neon">
    {value.pj && <NavBar/>}
    {/* <NavBar/> */}
          <div className="py-2" >
            <Routes>
              <Route path="/notes" element={<AuthGuard><NotesScreen/></AuthGuard>}/>
              <Route path="/notes/:id" element={<AuthGuard><NoteDetailScreen/></AuthGuard>}/>
              <Route path="/eventos" element={<AuthGuard><EventsScreen/></AuthGuard>}/>
              <Route path="/profile" element={<AuthGuard><PjScreen/></AuthGuard>}/>
              <Route path="/profile/:id" element={<AuthGuard><PjDetailScreen/></AuthGuard>}/>
              <Route path="/shop" element={<AuthGuard><ShopScreen/></AuthGuard>}/>
              <Route path="/rules" element={<AuthGuard><RuleScreen/></AuthGuard>}/>
              <Route path="/authenticate" element={<LoginScreeen/>}/>
              <Route path="/register" element={<RegisterScreen/>}/>
              <Route path="/frontpage" element={<FrontpageScreen/>}/>
              <Route path="/logout" />
            </Routes>
          </div>
    </div>
  );
}

export default App;
