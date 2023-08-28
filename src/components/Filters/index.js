import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
// import { filterTodoByName, filterTodoByStatus, filterTodoByPriority } from '../../redux/actions';
import filterSlice from './filterSlice';
import { filterNameSelector, filterStatusSelector } from '../../redux/selectors';
const { Search } = Input;

export default function Filters() {
  const searchValue = useSelector(filterNameSelector);
  const statusValue = useSelector(filterStatusSelector);
  const dispatch = useDispatch();

  function handleOnChangeSearchValue(e) {
    dispatch(filterSlice.actions.name(e.target.value));
  }

  function handleOnChangeStatus(e) {
    dispatch(filterSlice.actions.status(e.target.value));
  }

  function handleOnFilterByPriority(e) {
    dispatch(filterSlice.actions.priority(e));
  }

  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text'
          value={searchValue}
          onChange={handleOnChangeSearchValue}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={statusValue} onChange={handleOnChangeStatus}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          onChange={handleOnFilterByPriority}
        >
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
      </Col>
    </Row>
  );
}
