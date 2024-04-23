import { FormikProps } from 'formik';

interface FormValues {
  email: string;
  password: string;
}

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  formik: FormikProps<FormValues>;
}

export const Input = ({ type, name, placeholder, formik }: InputProps) => {
  const { handleChange, handleBlur, values } = formik;
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className='input input-bordered rounded-xl input-primary w-full'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name as keyof FormValues]}
      />
    </div>
  );
};
