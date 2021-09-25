import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import ListTable from '../list/ListTable'
import TodoListForm from '../list/TodoListForm'
import TodoForm from '../todos/TodoForm'
import TodoTable from '../todos/TodoTable'
import { getList } from '../../store/actions/ListActions';

const Home = () => {
    const dispatch = useDispatch();

    const currentUpdateTodoId = useSelector((state) => state.TodoUpdateId);
    const myTodos = useSelector((state) => state.todos);

    //getting lists
    useEffect(() => {
        dispatch(getList())
    }, [dispatch])

    return (
        <React.Fragment>
            <h2 className="title">Todo List App</h2>
            <Container>
                <Row>
                    <Col lg={4} md={4}>
                        <TodoListForm />
                        <ListTable />
                    </Col>
                    <Col lg={8} md={8}>
                        <TodoForm />
                        {currentUpdateTodoId &&
                            <TodoTable todos={myTodos} />
                        }
                        </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Home
