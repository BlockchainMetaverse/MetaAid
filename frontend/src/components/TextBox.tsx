import React, { FC, useEffect } from 'react'
import useInputs from '../hooks/useInputs'

interface TextBoxProps {
  label: string
  value?: string
  disabled?: boolean
  color?: string
  onChange?: (text: string) => void
}

const TextBox: FC<TextBoxProps> = ({ label, value, disabled, color, onChange: onChangeText }) => {
  const initial = {
    [label]: value || '',
  }
  const [form, onChange] = useInputs(initial)

  useEffect(() => {
    onChangeText && onChangeText(form[label])
  }, [form, label, onChangeText])

  // views
  return (
    <label className="block">
      <span className={`text-sm text-${color || 'gray-800'}`}>{label}</span>
      <input
        type="text"
        name={label}
        value={form[label]}
        className="mt-1 block text-sm w-full rounded-md border-gray-300 shadow-sm overflow-ellipsis focus:border-aid-light-purple focus:ring focus:ring-aid-light-purple disabled:bg-gray-100 disabled:text-gray-400 transition duration-300"
        disabled={typeof disabled === 'boolean' ? disabled : false}
        onChange={onChange}
      />
    </label>
  )
}

export default TextBox
