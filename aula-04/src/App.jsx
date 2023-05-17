//JsDoc  => documentação de JS
//Prop-types => documentar props de components

import { useEffect, useState } from "react";
import Card from "./components/card";
import { calculaIdade, filtraNumerosPares, getProduct } from "./utils";

function App() {
  const idadeCalculada = calculaIdade(1992);

  const [titleProduct, setTitleProduct] = useState("");

  const pares = filtraNumerosPares([1, 2, 3, 4, 5, "Wesley"]);

  async function getApiProduct() {
    const { title } = await getProduct(1);
    setTitleProduct(title);
  }

  useEffect(() => {
    getApiProduct();
  }, []);

  return (
    <>
      <h1>{idadeCalculada}</h1>
      <h2>{pares}</h2>
      <Card name={titleProduct} age={30} city="Porteirinha" />;
    </>
  );
}

export default App;
