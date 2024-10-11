"use client"
import React, { useState, ChangeEvent } from 'react';
import { City, ICity } from 'country-state-city';

type FormField = {
    id: string;
    label: string;
    type: string;
    placeholder?: string;
};

type FormVariant = {
    name: string;
    fields: FormField[];
};

const formVariants: FormVariant[] = [
    {
        name: 'Outstation',
        fields: [
            { id: 'from', label: 'FROM', type: 'text', placeholder: 'Enter pickup location' },
            { id: 'to', label: 'TO', type: 'text', placeholder: 'Enter drop location' },
            { id: 'pickupDate', label: 'PICK UP DATE', type: 'date' },
            { id: 'pickupTime', label: 'PICK UP AT', type: 'time' },
        ],
    },
    {
        name: 'Local',
        fields: [
            { id: 'from', label: 'FROM', type: 'text', placeholder: 'Enter pickup location' },
            { id: 'to', label: 'TO', type: 'text', placeholder: 'Enter drop location' },
            { id: 'when', label: 'WHEN', type: 'datetime-local' },
        ],
    },
    {
        name: 'Airport',
        fields: [
            { id: 'pickup', label: 'PICK UP', type: 'text', placeholder: 'Enter pickup location' },
            { id: 'drop', label: 'DROP', type: 'text', placeholder: 'Enter drop location' },
            { id: 'date', label: 'DATE', type: 'date' },
            { id: 'time', label: 'TIME', type: 'time' },
        ],
    },
];

type CityAutocompleteProps = {
    onSelect: (cityName: string) => void;
    placeholder?: string;
};

const CityAutocomplete: React.FC<CityAutocompleteProps> = ({ onSelect, placeholder }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [filteredCities, setFilteredCities] = useState<ICity[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);

        if (value) {
            const filtered = City?.getCitiesOfCountry('IN')?.filter(city =>
                city.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredCities(filtered || []);
        } else {
            setFilteredCities([]);
        }
    };

    const handleSelect = (city: ICity) => {
        setInputValue(city.name);
        setFilteredCities([]);
        onSelect(city.name); // Pass selected city back to parent
    };

    return (
        <div className="autocomplete-container">
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder={placeholder}
                className="autocomplete-input"
            />
            {filteredCities.length > 0 && (
                <ul className="autocomplete-list">
                    {filteredCities.map((city, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(city)}
                            className="autocomplete-item"
                        >
                            {city.name}, {city.countryCode}
                        </li>
                    ))}
                </ul>
            )}
            <style jsx>{`
                .autocomplete-container {
                    position: relative;
                    width: 100%;
                }
                .autocomplete-input {
                    width: 100%;
                    padding: 10px;
                    border-radius: 4px;
                    border: 1px solid #ddd;
                    background-color: #f9f9f9;
                    font-size: 14px;
                    color: black;
                }
                .autocomplete-list {
                    position:absolute; 
                    background-color:white; 
                    border-radius :4px; 
                    border :1px solid #ddd; 
                    margin-top :2px; 
                    width :100%; 
                    max-height :150px; 
                    overflow-y:auto; 
                    z-index :1000; 
                }
                .autocomplete-item {
                    padding :10px; 
                    cursor:pointer; 
                    color :#333;
                }
                .autocomplete-item:hover {
                    background-color:#f0f0f0; 
                }
            `}</style>
        </div>
    );
};

export default function DynamicBookingForm() {
    const [activeTab, setActiveTab] = useState<string>('Outstation');
    const [journeyType, setJourneyType] = useState<'One Way' | 'Round Trip'>('One Way');

    const renderFields = () => {
        const variant = formVariants.find(v => v.name === activeTab);
        if (!variant) return null;

        const fields = [...variant.fields];

        if (activeTab === 'Outstation') {
            if (journeyType === 'Round Trip') {
                fields.push({ id: 'returnDate', label: 'RETURN DATE', type: 'date' });
            }
        }

        return fields.map((field) => (
            <div key={field.id} className="input-group">
                <label htmlFor={field.id}>{field.label}</label>
                {/* Use CityAutocomplete for specific fields */}
                {field.id === "from" || field.id === "to" ? (
                    <CityAutocomplete placeholder={field.placeholder} onSelect={() => { }} />
                ) : (
                    <input
                        type={field.type}
                        id={field.id}
                        placeholder={field.placeholder}
                        className="form-input"
                    />
                )}
                <style jsx>{`
                    .input-group {
                        display:flex; 
                        flex-direction :column; 
                        margin-bottom :16px; 
                    }
                    .input-group label {
                        margin-bottom :6px; 
                        font-size :12px; 
                        color :#666; 
                    }
                    .form-input {
                        background-color :#f9f9f9; 
                        padding :10px; 
                        color: black; 
                        border-radius :4px; 
                        font-size :14px; 
                        border :1px solid #ddd; 
                        width :100%; 
                    }
                `}</style>
            </div>
        ));
    };

    return (
        <div className="booking-form">
            <div className="trip-types">
                {formVariants.map((variant) => (
                    <button
                        key={variant.name}
                        className={`trip-type ${activeTab === variant.name ? 'active' : ''}`}
                        onClick={() => setActiveTab(variant.name)}
                    >
                        {variant.name}
                    </button>
                ))}
            </div>
            {activeTab === 'Outstation' && (
                <div className="journey-types">
                    {['One Way', 'Round Trip'].map((type) => (
                        <button
                            key={type}
                            className={`journey-type ${journeyType === type ? 'active' : ''}`}
                            onClick={() => setJourneyType(type as 'One Way' | 'Round Trip')}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            )}
            <div className="form-inputs">
                {renderFields()}
            </div>
            <div className='button-div'>
                <button className="explore-cabs">EXPLORE CABS</button>
            </div>

            <style jsx>{`
                .booking-form {
                    background-color:white; 
                    padding :24px; 
                    border-radius :8px; 
                    box-shadow :0 2px 10px rgba(0, 0, 0, 0.3); 
                    max-width :700px;
                    width :100%;
                    margin :0 auto; 
                    display:flex;
                    flex-direction:column;
                    item-align:center;

                }
                .trip-types, .journey-types {
                    display:flex; 
                    justify-content :center; 
                    gap :2rem;
                    margin-bottom :16px; 
                  }
                  .trip-type, .journey-type {
                    font-size :22px;
                      padding :10px 16px; 
                      border-radius :4px; 
                      cursor:pointer; 
                      transition:.3s ease all; 
                      margin-right:.5rem;
                      background-color:white;
                      border: 1px solid #4CAF50;
                      color:#888;
                  }
                   
                  .trip-type.active, .journey-type.active{
                      background-color:#4CAF50; color:white;
                  }
                  .form-inputs{
                      display:grid; grid-template-columns : repeat(2 ,1fr); 
                      column-gap :2rem;
                  }
                    .button-div{
                        width:100%;
                        display:flex; justify-content:center;
                    }
                  .explore-cabs{
                      padding :12px ; background-color:#4CAF50 ; color:white ; border:none ; border-radius :4px ; cursor:pointer ; font-size :20px ; margin-top :24px ; transition :background-color .3s ease ;
                  }
                  .explore-cabs:hover{
                      background-color:#45a049 ;
                  }
                  @media (max-width: 1200px) {
                    .trip-type, .journey-type {
                        font-size: 20px;
                    }
                    .explore-cabs {
                        font-size: 18px;
                    }
                  }
                  @media (max-width: 992px) {
                    .trip-type, .journey-type {
                        font-size: 18px;
                    }
                    .explore-cabs {
                        font-size: 16px;
                    }
                  }
                  @media (max-width: 768px) {
                    .trip-type, .journey-type {
                        font-size: 16px;
                    }
                    .explore-cabs {
                        font-size: 14px;
                    }
                    .trip-types, .journey-types {
                        gap: 0.5rem;
                    }
                  }
                  @media (max-width: 576px) {
                    .trip-type, .journey-type {
                        font-size: 14px;
                    }
                    .explore-cabs {
                        font-size: 12px;
                    }
                  }
              `}</style>
        </div>
    );
}