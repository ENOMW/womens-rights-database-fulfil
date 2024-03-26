import React from 'react'
import Select from 'react-dropdown-select'
import 'react-datepicker/dist/react-datepicker.css'
import './Filters.css'
import CustomDatePicker from '../CustomDatePicker'

// TODO get these items from DB?
const LANGUAGE_ITEMS = [
  { value: 'All EU', label: 'All EU' },
  { value: 'Bulgarian', label: 'Bulgarian' },
  { value: 'Croatian', label: 'Croatian' },
  { value: 'Czech', label: 'Czech' },
  { value: 'Danish', label: 'Danish' },
  { value: 'Dutch', label: 'Dutch' },
  { value: 'English', label: 'English' },
  { value: 'Estonian', label: 'Estonian' },
  { value: 'Finnish', label: 'Finnish' },
  { value: 'French', label: 'French' },
  { value: 'German', label: 'German' },
  { value: 'Greek', label: 'Greek' },
  { value: 'Hungarian', label: 'Hungarian' },
  { value: 'Irish', label: 'Irish' },
  { value: 'Italian', label: 'Italian' },
  { value: 'Latvian', label: 'Latvian' },
  { value: 'Lithuanian', label: 'Lithuanian' },
  { value: 'Maltese', label: 'Maltese' },
  { value: 'Polish', label: 'Polish' },
  { value: 'Portuguese', label: 'Portuguese' },
  { value: 'Romanian', label: 'Romanian' },
  { value: 'Slovak', label: 'Slovak' },
  { value: 'Slovenian', label: 'Slovenian' },
  { value: 'Spanish', label: 'Spanish' },
  { value: 'Swedish', label: 'Swedish' },
]

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
}) => {
  // TODO think about this some more; might not need to worry about this here
  // ... and just handle it when calling the API
  const handleSetLanguageValues = (vals) => {
    // console.log(vals)
    if (vals.includes(LANGUAGE_ITEMS[0])) setLanguageValues(LANGUAGE_ITEMS)
    else setLanguageValues(vals)
  }

  return (
    <div className="flex w-screen ml-[-40px] pl-10 gap-2 items-center h-12">
      <Select
        multi
        placeholder="Language"
        options={LANGUAGE_ITEMS}
        onChange={(values) => handleSetLanguageValues(values)}
        values={languageValues}
        style={{ minWidth: '160px', height: '48px' }} // TODO more styling, esp. of options
      />
      <Select
        multi
        placeholder="Nationality of Plaintiff"
        options={nationalityOptions}
        onChange={(values) => setNationalityValues(values)}
        values={nationalityValues}
        className=".placeholder-red-500"
        style={{
          minWidth: '160px',
          height: '48px',
          fontSize: '16px !important',
        }} // TODO more styling, esp. of options
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
        placeholder="Jurisdiction"
        options={jurisdictionOptions}
        onChange={(values) => setJurisdictionValues(values)}
        values={jurisdictionValues}
        style={{ minWidth: '200px', height: '48px' }} // TODO more styling, esp. of options
      />
    </div>
  )
}

export default Filters
