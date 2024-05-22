import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../store/hooks';

interface SelectProps {
  color: string;
}

const CATS_URL = 'http://127.0.0.1:3000/expenses/categories';

export const Select = ({ color }: SelectProps) => {
  const [categories, setCategories] = useState<string[]>([]);
  const token = useAppSelector((state) => state.login.token);

  useEffect(() => {
    axios
      .get(CATS_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log('response: ', response.data);
        setCategories(Object.values(response.data));
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }, [token]);

  console.log('categories: ', categories);

  return (
    <select className={`${color} select w-full rounded-2xl`} defaultValue='default'>
      <option value='default' disabled>
        Select category
      </option>
      {categories &&
        categories.map((category, index) => (
          <option className='' key={index}>
            {category}
          </option>
        ))}
    </select>
  );
};
