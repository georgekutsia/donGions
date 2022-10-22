import {Navigate, NavLink, Route, Routes} from 'react-router-dom'
import {NavBar} from './component';
import { PjScreen, FrontpageScreen, NotesScreen, 
  RegisterScreen, ShopScreen, RuleScreen,  NoteDetailScreen, LoginScreeen, EventsScreen, FrontFrontpage, MonstersScreen} from "./screens"
import { Children, useContext, useEffect, useState } from 'react';
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
  // const [count, setCount] = useState(connected.pj.stats.life);
  // const handleReset = () => setCount(connected.pj.stats.life);
  // const handleCountUp = () => setCount((countPrev) => countPrev < connected.pj.stats.life ? countPrev + 1 : countPrev);
  // const handleCountDown = () => setCount((countPrev) => countPrev > 0 ? countPrev - 1 : countPrev);



  return (
    <div id="cursor-neon">
    {/* <Children handleCountUp={handleCountUp}/> */}

    {connected.pj && <NavBar/>}
    {/* <NavBar/> */}
          <div className="py-2" >
            <Routes>
              <Route path="/notes" element={<AuthGuard><NotesScreen/></AuthGuard>}/>
              <Route path="/notes/:id" element={<AuthGuard><NoteDetailScreen/></AuthGuard>}/>
              <Route path="/eventos" element={<AuthGuard><EventsScreen/></AuthGuard>}/>
              <Route path="/profile" element={<AuthGuard><PjScreen/></AuthGuard>}/>
              {/* <Route path="/profile/:id" element={<AuthGuard><PjDetailScreen/></AuthGuard>}/> */}
              <Route path="/shop" element={<AuthGuard><ShopScreen/></AuthGuard>}/>
              <Route path="/rules" element={<AuthGuard><RuleScreen/></AuthGuard>}/>
              <Route path="/authenticate" element={<LoginScreeen/>}/>
              <Route path="/register" element={<RegisterScreen/>}/>
              <Route path="/frontpage" element={<FrontpageScreen/>}/>
              <Route path="/monsters" element={<AuthGuard><MonstersScreen/></AuthGuard>}/>
              <Route path="/" element={<FrontFrontpage/>} />
            </Routes>
          </div>
    </div>
  );
}

export default App;
