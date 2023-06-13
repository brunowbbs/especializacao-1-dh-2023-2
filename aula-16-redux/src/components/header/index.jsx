import { useSelector } from "react-redux";

export default function Header() {
  const { name } = useSelector((state) => state.counter);

  return (
    <header style={{ background: "#888" }}>
      <h1>{name}</h1>
    </header>
  );
}
