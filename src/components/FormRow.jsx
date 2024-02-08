import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const FormRow = ({ type, name, text, isRequired, defaultValue }) => {
  return (
    <Form.Group
      controlId={name}
      className='my-3'
    >
      <Form.Label>{text}</Form.Label>
      <Form.Control
        type={type}
        placeholder={`Enter ${text}`}
        value={defaultValue || ''}
        name={name}
        key={name}
        required={isRequired}
      />
    </Form.Group>
  );
};
export default FormRow;

FormRow.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  defaultValue: PropTypes.string,
};
