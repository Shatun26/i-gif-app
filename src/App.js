import { useSelector } from 'react-redux';
import useRoutes from './routes';

function App() {
  const isAuth =  useSelector(state => state.auth.isAuth)
  const routes = useRoutes(isAuth)
  return routes;
}

export default App;
