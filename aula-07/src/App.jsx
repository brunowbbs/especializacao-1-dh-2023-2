import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Form from "./components/form";
import Table from "./components/table";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <h1>Diário Eletrônico</h1>

      <Form />

      <Table />
    </QueryClientProvider>
  );
}

export default App;
