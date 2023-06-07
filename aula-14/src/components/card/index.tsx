import { CardProps } from "./types";

export default function Card({ body, title }: CardProps) {
  return (
    <li>
      <p>{title}</p>
      <p>{body}</p>
    </li>
  );
}
