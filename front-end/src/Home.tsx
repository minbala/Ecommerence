import styles from "./Home.module.css";
import { SearchBar, Book } from "./Navigation Bar/SearchBar";
import BookData from "./Data.json";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

export const Home = () => {
  const [filteredData, setFilteredData] = useState<Book[]>([]);
  const [searchWord, setSearchWord] = useState("");

  const Books = BookData.map((book) => {
    return { id: uuidv4(), ...book };
  });
  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setSearchWord(event.target.value);
    event.preventDefault();

    console.log(event.target.value);
  };

  useEffect(() => {
    const newBooks = Books.filter((aBook) =>
      aBook.title.toLowerCase().includes(searchWord)
    );

    searchWord === "" ? setFilteredData([]) : setFilteredData(newBooks);
  }, [searchWord]);

  return (
    <div className={styles.Home}>
      <p>Hello again!</p>
      <SearchBar
        placeHolder={"Enter a product ..."}
        data={filteredData}
        onChange={onChangeHandler}
        searchWord={searchWord}
      ></SearchBar>
    </div>
  );
};
