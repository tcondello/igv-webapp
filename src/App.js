import './App.css';
import MenuAppBar from './components/MenuAppBar';
import AppIgv from './components/ivgComp'
import BasicTable from './components/tableComp';
// import { withAuthenticator } from '@aws-amplify/ui-react'

function App() {
  return (
    <>
      <MenuAppBar />
      <BasicTable />
      <AppIgv />
    </>
    
    
  );
}
// export default withAuthenticator(App)

export default App;
