import { Formik, Form, Field } from 'formik'
import Card from '../../components/Card'
import { TitleStyled, FieldGroup, LabelStyled, ButtonStyled } from './styled'

interface MyFormValues {
  text: string
  priority: string
  status: string
}

const TaskForm = ({ onSubmit }) => {
  const initialValues: MyFormValues = {
    text: '',
    priority: '',
    status: 'ACTIVE'
  }

  const handleSubmit = (values, actions) => {
    // Implement validations
    onSubmit(values)
    actions.resetForm()
  }

  return (
    <Card>
      <TitleStyled>New Task</TitleStyled>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <FieldGroup>
            <LabelStyled htmlFor='priority'>How fast?</LabelStyled>
            <Field
              id='priority'
              name='priority'
              placeholder='Priority (e.g Critical, Blocked, ...etc)'
            />
          </FieldGroup>
          <FieldGroup>
            <LabelStyled htmlFor='text'>Description</LabelStyled>
            <Field
              id='text'
              name='text'
              placeholder='Text (Finish my homework)'
            />
          </FieldGroup>
          <FieldGroup>
            <LabelStyled htmlFor='status'>Status</LabelStyled>
            <Field as='select' name='status'>
              <option value='ACTIVE'>ACTIVE</option>
              <option value='DONE'>DONE</option>
              <option value='DELETED'>DELETED</option>
            </Field>
          </FieldGroup>
          <ButtonStyled type='submit'>Submit</ButtonStyled>
        </Form>
      </Formik>
    </Card>
  )
}

export default TaskForm
