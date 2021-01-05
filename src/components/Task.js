import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Checkbox from '../components/Buttons/Checkbox';
import TaskForm from '../components/Forms/TaskForm';
import Button from 'react-bootstrap/Button'

export default function ControlledAccordions({ title, todo, todos, setTodos }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };

  return (
    <div className="todo mb-3">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Checkbox
                title={title}
                todo={todo}
                setTodos={setTodos}
                todos={todos}
              />
              <div className="task__btn">
                <Button variant="info" className="btn btn_details mr-3">Details</Button>
                <Button onClick={deleteHandler} variant="danger" className="btn btn_remove">Remove</Button>
              </div>
            </AccordionSummary>
            <AccordionDetails>
             {/*<TaskForm />*/}
            </AccordionDetails>
          </Accordion>
      </li>
    </div>
  );
}

