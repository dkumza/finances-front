export const Input = ({
  type,
  name,
  placeholder,
}: {
  type: string;
  name: string;
  placeholder: string;
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className='input input-bordered rounded-2xl input-primary w-full max-w-xs'
      />
    </div>
  );
};
