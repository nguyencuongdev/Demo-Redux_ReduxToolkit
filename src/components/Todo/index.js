import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
// import { updateStatusTodo } from '../../redux/actions';
import todoListSlice from '../TodoList/todoListSlice'
import { useDispatch } from 'react-redux';

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ name, priority, status, id }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(() => {
    if (status === 'Completed') {
      return true;
    }
    return false;
  });

  const toggleCheckbox = (e) => {
    setChecked(!checked);
    dispatch(todoListSlice.actions.status(id));
  };

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox} data-index={id}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  );
}
