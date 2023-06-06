import { CardProps } from "./types";

export default function Card({ nome, idade, cidade }: CardProps) {
  return (
    <div>
      <h1>{nome}</h1>
      <h2>{idade}</h2>
      <h3>{cidade}</h3>
    </div>
  );
}
