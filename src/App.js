import * as React from 'react';
import DashboardPage from './pages/dashboard/DashboardPage';

function App() {
  const [value, setValue] = React.useState('recents');

  
  return (
    <>
    <DashboardPage />
    </>
  );
    
}

export default App;

