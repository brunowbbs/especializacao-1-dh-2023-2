import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTodo, getTodos } from "../requests/todos";

export default function useTodo() {
  const queryClient = useQueryClient();
  const { data, isFetching, error } = useQuery(["@todos"], getTodos, {
    refetchOnWindowFocus: false,
  });

  const { mutate } = useMutation(addTodo, {
    onSuccess: () => queryClient.invalidateQueries(["@todos"]),
    onError: () => alert("NOK"),
  });

  return {
    todos: data,
    isFetching,
    error,
    addTodo: mutate,
  };
}
