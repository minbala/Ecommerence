import React from "react";
import styles from "./SearchBar.module.css";
import SearchIcon from "@mui/icons-material/Search";

export interface Book {
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
  id: string;
}

interface SearchBarProps {
  placeHolder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  data: Book[];
  searchWord: string;
}

export const SearchBar = ({
  placeHolder,
  data,
  onChange,
  searchWord,
}: SearchBarProps) => {
  return (
    <div className={styles.search}>
      <div className={styles.searchInputs}>
        <input
          type="text"
          placeholder={placeHolder}
          onChange={onChange}
          value={searchWord}
        />
        <div className={styles.searchIcon}>
          <SearchIcon></SearchIcon>
        </div>
      </div>
      {data.length !== 0 && (
        <div className={styles.dataResult}>
          {data.slice(0, 15).map((book) => {
            return (
              <a
                className={styles.dataItem}
                href={book.link}
                key={book.id}
                target="_blank"
              >
                <p>{book.title}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};
