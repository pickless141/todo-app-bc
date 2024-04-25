import { useState } from 'react';
import TodoList from '../components/TodoList';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';

interface Todo {
  id: number;
  content: string;
}

export default function AppLayout() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoContent, setNewTodoContent] = useState('');

  const addTodo = () => {
    if (newTodoContent) {
      const newTodo: Todo = {
        id: Date.now(), 
        content: newTodoContent,
      };
      setTodos([...todos, newTodo]);
      setNewTodoContent('');
    }
  };

  const deleteTodo = (todoId: number) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  const clearAllTodos = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, borrar todo',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        setTodos([]);
      }
    });
  };

  return (
    <div
    className="vh-100 d-flex align-items-center justify-content-center"
    style={{
      background: 'linear-gradient(to top, #007bff, #00c8ff)', 
    }}
    >
      <Container>
        <Row>
          <Col xs={12} md={8} lg={6} className="mx-auto">
            <div className="shadow p-3 mb-5 bg-body rounded">
              <h2 className="text-center mb-3">Todo App</h2>
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Col className="d-flex">
                    <Form.Control
                      type="text"
                      placeholder="Add your new todo"
                      value={newTodoContent}
                      onChange={(e) => setNewTodoContent(e.target.value)}
                      className="me-2"
                    />
                    <Button
                      variant="outline-primary"
                      onClick={addTodo}
                      style={{backgroundColor: '#6f42c1', borderColor: '#6f42c1'}}
                    >
                      <span style={{ color: 'white', fontSize: '1.5rem' }}>+</span>
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
              <TodoList todos={todos} deleteTodo={deleteTodo} />
              <Row className="justify-content-between align-items-center mt-3">
                <Col className="text-start">
                  <span>You have {todos.length} pending tasks</span>
                </Col>
                <Col className="text-end">
                  <Button variant="danger" style={{backgroundColor: '#6f42c1',borderColor: '#6f42c1',}} onClick={clearAllTodos}>Clear All</Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}