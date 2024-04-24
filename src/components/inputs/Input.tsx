import { FormikProps } from 'formik';

interface FormValues {
  email: string;
  password: string;
  // repeatPassword: undefined;
}

interface InputProps {
  color: string;
  type: string;
  name: string;
  placeholder: string;
  formik: FormikProps<FormValues>;
}

export const Input = ({ color, type, name, placeholder, formik }: InputProps) => {
  const { handleChange, handleBlur, values } = formik;
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`${color} input input-bordered rounded-xl w-full`}
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
