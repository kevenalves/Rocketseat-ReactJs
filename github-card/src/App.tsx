import { Card } from "./components/card/style";
import { Repositories } from "./components/Repositories/Repositories";
import { GlobalStyle } from "./style/global";

export function App() {



  return (
    <main>
    <GlobalStyle />
    <Card>
    <Repositories />
    </Card>
    </main>
  );
}