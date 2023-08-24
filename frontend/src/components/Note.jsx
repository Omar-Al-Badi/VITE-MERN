import { Form, Button } from 'react-bootstrap'
const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <li className='note'>
      {note.content} 
      <Button variant="secondary" type="submit"  onClick={toggleImportance}>{label}
      </Button>
    </li>
  )
}

export default Note