import * as yup from 'yup'


export const basicSchema=yup.object().shape({
  Email:yup.string().email("please enter the valid email address")
            .required("This field is required"),
  FullName:yup.string().
            required('Name is required')
            .min(2, 'Name must be at least 2 characters')
            .max(50, 'Name must not exceed 50 characters'),
  PhoneNumber:yup.string()
            .matches(
              /^\+(?:[0-9] ?){6,14}[0-9]$/,
              'Please enter a valid phone number')
            .required('This field is required')
})
