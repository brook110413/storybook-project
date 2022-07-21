import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';

function App() {
  return <ThemeProvider theme={theme}>storybook project</ThemeProvider>;
}

export default App;
