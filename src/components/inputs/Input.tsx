import { FormikProps } from 'formik';

export interface FormValues {
  email?: string;
  password?: string;
  category?: string;
  title?: string;
  description?: string;
  date?: string;
  amount?: number | null;
  search?: string;
  // repeatPassword: undefined;
}

interface InputProps {
  color: string;
  type: string;
  name: string;
  placeholder: string;
  formik: FormikProps<FormValues>;
}

export const Input = ({
  color,
  type,
  name,
  placeholder,
  formik,
}: InputProps) => {
  const { handleChange, handleBlur, values } = formik;
  return (
    <div>
      <input
        type={type}
        step={0.01}
        name={name}
        placeholder={placeholder}
        className={`${color} input input-bordered w-full`}
        onChange={handleChange}
        onBlur={handleBlur}
        min={0}
        // prefix='$'
        value={values[name as keyof FormValues] || ''}
      />
      {formik.touched[name as keyof FormValues] &&
      formik.errors[name as keyof FormValues] ? (
        <p className='text-xs text-red-500'>
          {formik.errors[name as keyof FormValues]}
        </p>
      ) : null}
    </div>
  );
};
