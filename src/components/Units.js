export const sizeUnits = [
    { value: 'pol', label: 'Inch'},
    { value: 'mm', label: 'Milimiter'},
    { value: 'cm', label: 'Centimeter'},
    { value: 'm', label: 'Meter'},
  ];

  export const tempUnits = [
    { value: 'celsius', label: 'Celsius'},
    { value: 'f', label: 'Fahrenheit'},
    { value: 'k', label: 'Kelvin'},
  ];
  
  export const groupedOptions = [
    {
      label: 'Size',
      options: sizeUnits,
    },
    {
      label: 'Temperature',
      options: tempUnits,
    },
  ];
  