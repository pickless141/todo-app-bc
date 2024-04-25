import { ListGroup, Button } from 'react-bootstrap';
import { BsTrash } from 'react-icons/bs';

interface TodoListProps {
  todos: { id: number; content: string; }[];
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo }) => {
  return (
    <ListGroup className="mt-3">
      {todos.map(todo => (
        <ListGroup.Item
          key={todo.id}
          className="d-flex justify-content-between align-items-center my-2 bg-light"
          style={{ borderRadius: '0.25rem' }}
        >
          {todo.content}
          <Button
            variant="danger"
            size="sm"
            onClick={() => deleteTodo(todo.id)}
            className="btn-delete ms-auto" 
            style={{ display: 'none' }} 
          >
            <BsTrash />
          </Button>
        </ListGroup.Item>
      ))}
      <style type="text/css">
        {`
          .list-group-item {
            transition: transform 0.1s ease-in-out; 
          }
          .list-group-item:hover {
            transform: scale(1.02); 
          }
          .list-group-item:hover .btn-delete {
            display: block !important; 
          }
          .btn-delete:hover {
            box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5); 
          }
        `}
      </style>
    </ListGroup>
  );
};

export default TodoList;