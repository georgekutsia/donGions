import {Navigate, Route, Routes} from 'react-router-dom'
import React from 'react';
import {NavBar} from './component';
import { PjScreen, FrontpageScreen, NotesScreen, PjDetailScreen,
  RegisterScreen, ShopScreen, RuleScreen,  NoteDetailScreen, LoginScreeen, 
  EventsScreen, FrontFrontpage, MonstersScreen, DongionsDetail} from "./screens"
import { useContext, useState } from 'react';
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

function App() {
  const connected = useContext(AuthContext)
const [countMons, setCountMons] = useState(4)

  return (
    <div >
    {connected.pj && <NavBar/>}ç
    {/* <NavBar/> */}
          <div className="cur1" >
            <Routes>
              <Route path="/" element={<FrontFrontpage/>} />
              <Route path="/notes" element={<AuthGuard><NotesScreen/></AuthGuard>}/>
              <Route path="/notes/:id" element={<AuthGuard><NoteDetailScreen/></AuthGuard>}/>
              <Route path="/eventos" element={<AuthGuard><EventsScreen/></AuthGuard>}/>
              <Route path="/profile" element={<AuthGuard><PjScreen counterForMonster={countMons}/></AuthGuard>}/>
              <Route path="/profile/:id" element={<AuthGuard><PjDetailScreen/></AuthGuard>}/>
              <Route path="/shop" element={<AuthGuard><ShopScreen/></AuthGuard>}/>
              <Route path="/rules" element={<AuthGuard><RuleScreen/></AuthGuard>}/>
              <Route path="/authenticate" element={<LoginScreeen/>}/>
              <Route path="/register" element={<RegisterScreen/>}/>
              <Route path="/frontpage" element={<FrontpageScreen/>}/>
              <Route path="/monsters" element={<AuthGuard><MonstersScreen/></AuthGuard>}/>
              <Route path="/dongionsdDetail" element={<DongionsDetail/>}/>
            </Routes>
          </div>
    </div>
  );
}

export default App;
