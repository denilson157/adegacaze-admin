import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import {
  routesGuest,
  routesApp
} from './routes';
import { isAuthenticated } from './services/auth';

const App = () => {
  const content = useRoutes(isAuthenticated() ? routesApp : routesGuest);

  return (
    <ThemeProvider theme={theme}>
      {content}
    </ThemeProvider>
  );
};

export default App;
