const price_multiplier = {
  over100: 1.65,
  over1000: 1.2,
};

price_storage_dictionary = {
  Weight: 0,
  Distance: 0,
};

function calculateAndOutputNumber(value, value_index) {
  output_element = document.getElementById("calculatorOutput");
  price_storage_dictionary[value_index] = value;

  Weight = Number.parseInt(price_storage_dictionary.Weight);
  Distance = Number.parseInt(price_storage_dictionary.Distance);

  if (Weight + Distance <= 50) {
    output_element.innerText = `${100} kr`;
  } else if (Weight + Distance <= 1000) {
    output_element.innerText = `${Math.round(Weight * Distance * price_multiplier.over100)} kr`;
  } else {
    output_element.innerText = `${Math.round(Weight * Distance * price_multiplier.over1000)} kr`;
  }
}
