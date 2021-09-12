import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import routes from './routes';

const App = () => {
  const content = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      {content}
    </ThemeProvider>
  );
};

export default App;
