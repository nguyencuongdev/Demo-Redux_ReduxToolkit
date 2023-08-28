import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { nanoid } from 'nanoid'
import { useSelector, useDispatch } from 'react-redux';

// import { updateNameTodoAdd, updatePriorityTodoAdd, resetodoAdd, createTodo } from '../../redux/actions';
import todoListSlice from './todoListSlice';
import todoSlice from '../Todo/todoSlice';
import { todoRemainingSelector } from '../../redux/selectors';

export default function TodoList() {
  const todoValue = useSelector((state) => state.todo);
  const todoList = useSelector(todoRemainingSelector);
  const dispatch = useDispatch();

  function handleOnChangeName(e) {
    dispatch(todoSlice.actions.name(e.target.value));
  }

  function handleOnChangePriority(e) {
    dispatch(todoSlice.actions.priority(e));
  }

  function handleSubmitTodo() {
    dispatch(todoListSlice.actions.create({ id: nanoid(), ...todoValue }));
    dispatch(todoSlice.actions.reset());
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.length > 0 && todoList.map((todo) =>
          <Todo name={todo.name} priority={todo.priority} key={todo.id} id={todo.id} status={todo.status} />
        )}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input onChange={handleOnChangeName} value={todoValue.name} />
          <Select defaultValue="Medium" onChange={handleOnChangePriority} value={todoValue.priority}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary'
            onClick={handleSubmitTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
