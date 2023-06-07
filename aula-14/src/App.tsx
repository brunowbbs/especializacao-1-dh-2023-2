import { useEffect, useState } from "react";
import { Response, fetchPosts } from "./services/fethPosts";
import Card from "./components/card";

function App() {
  //const titulo = useRef<HTMLHeadElement>(null);

  const [posts, setPosts] = useState<Response[]>([]);

  async function getPosts() {
    const response = await fetchPosts();

    setPosts(response.data);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <h1>Hello World</h1>
      <ul>
        {posts.map((post) => (
          <Card key={post.id} body={post.body} title={post.title} />
        ))}
      </ul>
    </>
  );
}

export default App;
