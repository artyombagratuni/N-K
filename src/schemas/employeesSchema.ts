import * as yup from 'yup';

export const employeesSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name must be at least 3 characters long')
    .required('Required'),
  surname: yup
    .string()
    .min(3, 'Surname must be at least 3 characters long')
    .required('Required'),
  email: yup.string().email('Please enter a valid email').required('Required'),
  position: yup.string().min(4).required('Required'),
});
