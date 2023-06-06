// interface Fruit {
//   nome: string;
//   cor: string;
// }

// interface CardFruitProps extends Fruit {
//   fruit: string;
// }

type CardFruitProps = {
  fruit: string;
};

export default function CardFruit({ fruit }: CardFruitProps) {
  return <h1>{fruit}</h1>;
}
