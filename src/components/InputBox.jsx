import React from 'react'

function InputBox({
  label,
  amount,
  currencyOptions = [],
  selectCurrency="USD",
  onAmountChange,
  onCurrencyChange,
  amountDisable = false
}) {
  return (
    <div className="bg-white p-4 rounded-lg flex justify-between">

      <div className="flex flex-col gap-2">
        <label className="text-gray-600">
          {label}
        </label>

        <input
          type='number'
          value={amount}
          disabled={amountDisable}
          onChange={(e) => onAmountChange?.(e.target.value)}
          className="p-0.5 border rounded-lg w-full"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-600">
          Currency Type
        </label>

        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange?.(e.target.value)}
          className="rounded-lg bg-gray-100 px-2 py-1 cursor-pointer"
        >
          {currencyOptions.map((currency) => (
            <option
              key={currency}
              value={currency}
            >
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

    </div>
  );
}

export default InputBox