import React  from "react";

interface SearchBarProps {
  items: {
    id: number;
    title: string;
    description: string;
  }[];
}

const SearchBar: React.FC<SearchBarProps> = ({ items }) => {
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  const searchResults = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
     
      
    </>
  );
};

export default SearchBar;
