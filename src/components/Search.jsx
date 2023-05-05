import React from 'react'

const Search = ({ value, onChangeValue }) => {

  return (
      <input
        className='search'
        type='text'
        placeholder='Поиск по валютам'
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
      />
  )
}

export default Search