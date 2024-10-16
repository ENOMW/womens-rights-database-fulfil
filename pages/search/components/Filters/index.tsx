import React from 'react'
import Select from 'react-dropdown-select'
import Toggle from 'react-toggle'

import 'react-datepicker/dist/react-datepicker.css'
import './Filters.css'
import CustomDatePicker from '../CustomDatePicker'
import { LANGUAGE_ITEMS } from './constants'

const Filters = ({
  languageValues,
  setLanguageValues,
  nationalityValues,
  setNationalityValues,
  nationalityOptions,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  jurisdictionValues,
  setJurisdictionValues,
  jurisdictionOptions,
  withEuCharter,
  setWithEuCharter,
  countryOptions,
  countryValues,
  setCountryValues,
  euCharterArticles,
  setEuCharterArticles,
  euCharterOptions,
}) => {
  const handleClearAll = () => {
    setLanguageValues([])
    setCountryValues([])
    setEndDate(null)
    setStartDate(null)
    setWithEuCharter(false)
    setEuCharterArticles([])
    setJurisdictionValues([])
    setNationalityValues([])
  }

  return (
    <div className="flex flex-wrap w-full justify-center gap-2 items-center h-fit">
      <Select
        multi
        placeholder="Language"
        options={LANGUAGE_ITEMS}
        onChange={(values) => setLanguageValues(values)}
        values={languageValues}
        style={{ minWidth: '160px', height: '48px' }}
        color="#404080"
      />
      <Select
        multi
        placeholder="Nationality of Plaintiff"
        options={nationalityOptions}
        onChange={(values) => setNationalityValues(values)}
        values={nationalityValues}
        style={{
          minWidth: '160px',
          height: '48px',
          fontSize: '16px !important',
        }}
        color="#404080"
      />
      <div className="flex flex-col justify-center border border-[#ccc] h-12 px-[10px]">
        {startDate != null ? (
          <label className="text-xs text-gray-800">Start date</label>
        ) : null}
        <CustomDatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Start date"
          isClearable
          closeOnScroll={true}
        />
      </div>
      <div className="flex flex-col justify-center border border-[#ccc] h-12 px-[10px]">
        {endDate != null ? (
          <label className="text-xs text-gray-800">End date</label>
        ) : null}
        <CustomDatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          placeholderText="End date"
          isClearable
          closeOnScroll={true}
        />
      </div>
      <Select
        multi
        searchable
        placeholder="Country"
        options={countryOptions}
        onChange={(values) => {
          setCountryValues(values)
          setJurisdictionValues([])
        }}
        values={countryValues}
        style={{ minWidth: '200px', height: '48px' }}
        color="#404080"
      />
      <Select
        multi
        searchable
        placeholder="Jurisdiction"
        options={jurisdictionOptions}
        onChange={(values) => setJurisdictionValues(values)}
        values={jurisdictionValues}
        style={{ minWidth: '200px', height: '48px' }}
        color="#404080"
      />
      <label className="flex justify-center text-gray-800">
        <Toggle
          checked={withEuCharter}
          icons={false}
          onChange={() => setWithEuCharter(!withEuCharter)}
        />
        <span className="ml-2">Use of EU Charter of Fundamental Rights</span>
      </label>
      {withEuCharter ? (
        <Select
          multi
          searchable
          placeholder="EU Charter Articles"
          options={euCharterOptions}
          onChange={(values) => setEuCharterArticles(values)}
          values={euCharterArticles}
          style={{ minWidth: '200px', height: '48px' }}
          color="#404080"
        />
      ) : null}
      <button
        className="border-none bg-transparent text-blue-500 cursor-pointer"
        onClick={handleClearAll}
      >
        Clear All
      </button>
    </div>
  )
}

export default Filters
