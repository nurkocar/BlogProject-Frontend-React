import BlogRouter from "./Router/Router";
import { AppContextProvider } from './context/AppContext'


function App() {
  return (
    <AppContextProvider>
      <BlogRouter />
    </AppContextProvider>
  );
}

export default App;