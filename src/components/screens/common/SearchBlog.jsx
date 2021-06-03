import React,{useState} from "react";
import { Input, AutoComplete } from 'antd';
import { SelectProps } from 'antd/es/select';

export default function SearchBlog() {


  const handleSearch = (value) => {
      console.log(value)
    // setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value) => {
    console.log('onSelect', value);
  };
  return (
    <div style={{textAlign: "center"}}>
      <AutoComplete
        dropdownMatchSelectWidth={252}
        onSearch={handleSearch}
      >
        <Input.Search size="large" placeholder="Search" enterButton />
      </AutoComplete>
    </div>
  );
}
