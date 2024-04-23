import { FormikProps } from 'formik';

interface FormValues {
  email: string;
  password: string;
  repeatPassword?: string;
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
      {formik.touched[name as keyof FormValues] && formik.errors[name as keyof FormValues] ? (
        <p className='text-xs text-red-500'>{formik.errors[name as keyof FormValues]}</p>
      ) : null}
    </div>
  );
};
