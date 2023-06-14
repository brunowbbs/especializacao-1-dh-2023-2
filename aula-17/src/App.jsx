import { useDispatch, useSelector } from "react-redux";

import "./styles.css";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();

  const [formdata, setFormdata] = useState({ name: "", price: "" });

  const { products } = useSelector((state) => state.products);

  return (
    <>
      <div>
        <input
          value={formdata.name}
          type="text"
          placeholder="Nome do produto"
          onChange={(event) =>
            setFormdata({ ...formdata, name: event.target.value })
          }
        />
        <input
          value={formdata.price}
          type="text"
          placeholder="Preço"
          onChange={(event) =>
            setFormdata({ ...formdata, price: event.target.value })
          }
        />
        <br />
        <button
          onClick={() => {
            dispatch({ type: "ADD_PRODUCT", payload: { product: formdata } });
            setFormdata({ name: "", price: "" });
          }}
        >
          Salvar
        </button>

        <button onClick={() => dispatch({ type: "CLEAR_LIST" })}>
          Limpar Lista
        </button>

        <ul>
          {products.map((product, idx) => (
            <li key={idx}>
              {JSON.stringify(product)}
              <button>Remover</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
