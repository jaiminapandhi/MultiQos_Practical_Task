import React from 'react'
import Select from 'react-select'

const SelectComponent = ({options,handleChange,selectedValue}) => {
  return (
    <div>
    <Select value={selectedValue} options={options} handleChange={handleChange} />
    </div>
  )
}

export default SelectComponent