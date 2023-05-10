import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const products = [
  {
    id: "100",
    nome: "Celular",
  },
  {
    id: "200",
    nome: "Computador",
  },
  {
    id: "300",
    nome: "Coca-cola",
  },
];

export default function Home() {
  const navigate = useNavigate();

  const [valor, setValor] = useState(undefined);

  function goToProduct() {
    navigate(`/product/${valor}`);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Digite o id"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <Link to="/product/550">
        <h1>Hello Home</h1>
      </Link>
      <ul>
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <li>{product.nome}</li>
          </Link>
        ))}
      </ul>
      <button onClick={goToProduct}>Ir para pagina de produtos</button>
    </div>
  );
}
