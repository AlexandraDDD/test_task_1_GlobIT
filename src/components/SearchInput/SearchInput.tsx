import { useState, useEffect } from 'react';
import { Icon, Input, SearchWrapper } from './style';
import SearchIcon from '../../assets/SearchIcon/SearchIcon';

interface SearchInputProps {
  onSearch: (term: string) => void;
  getUsers: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch, getUsers }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string | null>(
    null
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      onSearch(debouncedSearchTerm.toLowerCase());
    } else if (debouncedSearchTerm === '') {
      getUsers();
    }
  }, [debouncedSearchTerm]);

  return (
    <SearchWrapper>
      <Icon>
        <SearchIcon />
      </Icon>
      <Input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Поиск..."
      />
    </SearchWrapper>
  );
};

export default SearchInput;
