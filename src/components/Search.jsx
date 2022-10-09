
import React, { useState, useEffect } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import axios from "axios";
import '../index.css';

const Search = () => {

  const [myOptions, setMyOptions] = useState([]);

  const url = 'https://pokeapi.co/api/v2/ability/?limit=20&offset=20';

  useEffect(() => {

    axios.get(url).then(response => {
      //  console.log(response.data);
      setMyOptions({
        data: response.data.results
      });
    }).catch((err) => {
      console.log(err);
    });


  }, []);


  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    //console.log(string, results)
    // axios.get(`https://makemydeals.co.in/api/product/search/${string}`).then(response => {
    //   console.log(response.data);
    //   setMyOptions({
    //     data: response.data
    //   })
    // }).catch((err) => {
    //   console.log(err);
    // });
  }

  const handleOnHover = (result) => {
    // the item hovered
    // console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    // console.log(product);
  }

  const handleOnFocus = () => {
    // console.log('Focused')
  }

  const formatResult = (item) => {
    // console.log(item);
    return (
      <>
        <a href={item.url} target="_blank"> <span style={{ display: 'block', textAlign: 'left' }}> {item.name}</span></a>
      </>
    )
  }


  
  // console.log(myOptions);

  return (
    <>
      <div style={{ width: 400 }}>
        <ReactSearchAutocomplete
          items={myOptions.data}
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          autoFocus
          formatResult={formatResult}
        />
      </div>
    </>
  );

}

export default Search;