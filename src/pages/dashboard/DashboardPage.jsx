import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { responsiveFontSizes } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import RoomServiceOutlinedIcon from '@mui/icons-material/RoomServiceOutlined';
import manos from '../../assets/manos.jpg'

import '../../CaosDiseno.css';

function DashboardPage() {

  return (
    <header>
      
      <div >
        <MenuIcon className='iconoMenuLateral' />
        <a className='roboto-bold nombreUsuario'>Unidad Residencial</a>
        <NotificationsNoneIcon className='iconoNotificacion' />
        <img src= {manos} className="manos" alt='manos'/>
      </div>

      <div className='contenedorPresupuestoEjecutado'>
      </div>

      <div className='contenedorPersonal'>
         <PeopleOutlineOutlinedIcon className='iconoTurno' />
         <a className='tituloEmpleado'>En turno</a>
         <RoomServiceOutlinedIcon  className='iconoToque' />

         <div>
            <img src= {manos} className="fotoTurno" alt='manos'/>
            <a className='nombreEmpleado'>Hernan Manuel</a>
            <a className='documentoEmpleado'>C. C. 1020769714</a>
         </div>
      </div>

      <div>
        <Button className='selectorDashboard' variant="contained">Cuotas</Button>
        <Button className='selectorDashboard2' variant="contained">Cartera al día</Button>
        <Button className='selectorDashboard3' variant="contained">Uni..</Button>
        <SearchIcon className='iconoBusqueda' />
      </div>

      
    </header>
  );
    
}

export default DashboardPage;