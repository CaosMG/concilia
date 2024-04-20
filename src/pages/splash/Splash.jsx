import logoadpmin from '../../assets/logoadpmin.png';
import logoFondo from './../../assets/iconosFondo.svg';
import Button from '@mui/material/Button';

import '../../CaosDiseno.css';


export function Splash() {
 return (
    <div>
      <header className='fondoNaranja'>
        <div>
         <img src= {logoadpmin} className="logoSplash" alt='logoadpmin' />  
        </div>
        <Button className='botonInicio' variant="contained">Iniciar</Button>
        <img src= {logoFondo} className="logoFondo" alt='logoFondo' />
      </header>
    </div>
  );

}

export default Splash;