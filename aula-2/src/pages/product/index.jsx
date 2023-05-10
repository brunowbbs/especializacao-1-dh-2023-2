import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const params = useParams();

  /*  const { id } = params; */

  console.log(params);

  useEffect(() => {
    fetch(`https://product-api.com/${params.id}`);
  }, []);

  return (
    <div>
      <h1>Hello Product - {params.id}</h1>
    </div>
  );
}
