const conversionRates = {
    length: {
        meter: {
            kilometer: 0.001,
            mile: 0.000621371
        },
        kilometer: {
            meter: 1000,
            mile: 0.621371
        },
        mile: {
            meter: 1609.34,
            kilometer: 1.60934
        }
    },
    time: {
        second: {
            minute: 1 / 60,
            hour: 1 / 3600
        },
        minute: {
            second: 60,
            hour: 1 / 60
        },
        hour: {
            second: 3600,
            minute: 60
        }
    },
    temperature: {
        celsius: {
            fahrenheit: 1.8,
            kelvin: 1
        },
        fahrenheit: {
            celsius: 5 / 9,
            kelvin: 5 / 9 + 273.15
        },
        kelvin: {
            celsius: 1 - 273.15,
            fahrenheit: 9 / 5 - 459.67
        }
    },
    weight: {
        gram: {
            kilogram: 0.001,
            pound: 0.00220462
        },
        kilogram: {
            gram: 1000,
            pound: 2.20462
        },
        pound: {
            gram: 453.592,
            kilogram: 0.453592
        }
    }
};


// Category select change event listener
document.getElementById("categorySelect").addEventListener("change", updateUnitOptions);

// Input and output unit select change event listener
document.getElementById("inputUnit").addEventListener("change", convert);
document.getElementById("outputUnit").addEventListener("change", convert);

// Function to update unit options based on selected category
function updateUnitOptions() {
    const category = document.getElementById("categorySelect").value;
    const inputUnitSelect = document.getElementById("inputUnit");
    const outputUnitSelect = document.getElementById("outputUnit");

    // Clear previous options
    inputUnitSelect.innerHTML = "";
    outputUnitSelect.innerHTML = "";

    // Add options based on selected category
    for (const unit in conversionRates[category]) {
        const inputOption = document.createElement("option");
        const outputOption = document.createElement("option");
        inputOption.value = unit;
        outputOption.value = unit;
        inputOption.textContent = unit;
        outputOption.textContent = unit;
        inputUnitSelect.appendChild(inputOption);
        outputUnitSelect.appendChild(outputOption);
    }

    // Trigger conversion
    convert();
}

// Conversion function
function convert() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;

    if (!isNaN(inputValue)) {
        const category = document.getElementById("categorySelect").value;

        const outputValue = inputValue * conversionRates[category][inputUnit][outputUnit];
        document.getElementById("outputValue").value = outputValue.toFixed(2);
    }
}

// Initial unit options update
updateUnitOptions();
