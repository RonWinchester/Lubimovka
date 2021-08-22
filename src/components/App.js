import React from "react";
import SearchBar from "./SearchBar";
import MainContent from "./MainContent";
import { result } from "../data.json";

function App() {
  const [cards, setCards] = React.useState([]);
  const [title, setTitle] = React.useState("Поиск");
  const [alphabetItem, setAlphabetItem] = React.useState([]);

  function handleRequest(search) {
    let match = [];
    result.forEach((item) => {
      if (
        item.author_firstName.toLowerCase().includes(search) ||
        item.author_lastName.toLowerCase().includes(search) ||
        item.title.toLowerCase().includes(search)
      ) {
        return match.push(item);
      }
    });
    displayingInfo(match, search);
  }

  function displayingInfo(info, search) {
    if (info.length > 0) {
      onAlphabetized(info);
      setCards(info);
      setTitle(`По запросу «${search}» мы нашли`);
    } else {
      setCards([]);
      setAlphabetItem([]);
      setTitle(`По запросу «${search}» мы ничего не нашли`);
    }
  }

  let authors = [];
  let arrAuthors = [];

  function onAlphabetized(info) {
    let alphabetized = info;
    alphabetized.sort(function (a, b) {
      if (a.author_lastName < b.author_lastName) {
        return -1;
      }
      if (a.author_lastName > b.author_lastName) {
        return 1;
      }
      return 0;
    });
    const uniqueAuthors = setAuthors(alphabetized);
    setAlphabetItem(uniqueAuthors);
  }

  function setAuthors(array) {
    if ((Array.isArray(array) || array instanceof Array) && array.length) {
      array.forEach((item) => {
        arrAuthors.push(`${item.author_firstName} ${item.author_lastName}`);
      });
      const uniqueValues = unDuplicateArraySingleValues(arrAuthors);
      return splittingArray(uniqueValues);
    } else {
      return array;
    }
  }

  function unDuplicateArraySingleValues(array) {
    // Проверка, что это не пустой массив
    if ((Array.isArray(array) || array instanceof Array) && array.length) {
      // Возвращает массив уникальных значений
      return array.filter((currValue, ind) => {
        return array.indexOf(currValue) === ind;
      });
    } else {
      // Это не заполненный массив,
      // возвращаем переданное без изменений
      return array;
    }
  }

  function splittingArray(arr) {
    if (arr.length === 1) {
      return arr;
    } else {
      for (let i = 1; i < arr.length; i++) {
        if (
          arr[i][arr[i].indexOf(" ") + 1] ===
          arr[i - 1][arr[i - 1].indexOf(" ") + 1]
        ) {
          authors.push([arr[i - 1], arr[i]]);
        } else {
          authors.push(arr[i]);
        }
      }
      for (let i = 1; i < authors.length; i++) {
        if (authors[i] !== "string" && authors[i][0] === authors[i - 1]) {
          authors.splice(i - 1, 1);
        }
      }
      return authors;
    }
  }

  return (
    <div className="App">
      <SearchBar title={title} onSearch={handleRequest}></SearchBar>
      <MainContent cards={cards} alphabetItem={alphabetItem}></MainContent>
    </div>
  );
}

export default App;
