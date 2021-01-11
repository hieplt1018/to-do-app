import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxLabels({ title, todo, todos, setTodos, setShowBulkAction }) {
  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const completeHandler = () => {
    let numTaskCompleted = 0;

    todos.forEach(element => {
      if (element.completed === true) {
        numTaskCompleted++;
      }
    });

    setTodos(todos.map((item) => {
      if(item.id === todo.id) {
        if(numTaskCompleted === 1 && item.completed === true) {
          setShowBulkAction(false);
        } else {
          setShowBulkAction(true);
        }

        return {
          ...item, completed: !item.completed
        }
      }
      return item;
    }));
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            onClick={completeHandler}
            name="done"
            color="primary"
          />
        }
        label={title}
      />
    </FormGroup>
  );
}

