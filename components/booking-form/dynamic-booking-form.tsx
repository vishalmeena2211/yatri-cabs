"use client"
import React, { useState, ChangeEvent, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/store';
import { setActiveTab, setJourneyType, updateFormData, clearFormData } from '@/lib/features/bookingSlice';
import { City, ICity } from 'country-state-city';
import styles from './dynamic-booking-form.module.css';
import { CityAutocompleteProps } from '@/lib/types';
import { formVariants } from '@/lib/static';

// CityAutocomplete component for city selection with autocomplete functionality
const CityAutocomplete: React.FC<CityAutocompleteProps> = React.memo(({ onSelect, placeholder }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [filteredCities, setFilteredCities] = useState<ICity[]>([]);

    // Handle input change and filter cities based on input
    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
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
    }, []);

    // Handle city selection from the filtered list
    const handleSelect = useCallback((city: ICity) => {
        setInputValue(city.name);
        setFilteredCities([]);
        onSelect(city.name); // Pass selected city back to parent
    }, [onSelect]);

    return (
        <div className={styles.autocompleteContainer}>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder={placeholder}
                className={styles.autocompleteInput}
            />
            {filteredCities.length > 0 && (
                <ul className={styles.autocompleteList}>
                    {filteredCities.map((city, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(city)}
                            className={styles.autocompleteItem}
                        >
                            {city.name}, {city.countryCode}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
});

CityAutocomplete.displayName = 'CityAutocomplete';

// Main DynamicBookingForm component
export default function DynamicBookingForm() {
    const dispatch = useDispatch();
    const { activeTab, journeyType, formData } = useSelector((state: RootState) => state.booking);

    // Render form fields based on the active tab and journey type
    const renderFields = useCallback(() => {
        const variant = formVariants.find(v => v.name === activeTab);
        if (!variant) return null;

        const fields = [...variant.fields];

        // Add return date field for round trip in Outstation tab
        if (activeTab === 'Outstation' && journeyType === 'Round Trip') {
            fields.push({ id: 'returnDate', label: 'RETURN DATE', type: 'date' });
        }

        return fields.map((field) => (
            <div key={field.id} className={styles.inputGroup}>
                <label htmlFor={field.id}>{field.label}</label>
                {field.id === "from" || field.id === "to" ? (
                    <CityAutocomplete
                        placeholder={field.placeholder}
                        onSelect={(cityName) => dispatch(updateFormData({ id: field.id, value: cityName }))}
                    />
                ) : (
                    <input
                        type={field.type}
                        id={field.id}
                        placeholder={field.placeholder}
                        className={styles.formInput}
                        value={formData[field.id] || ''}
                        onChange={(e) => dispatch(updateFormData({ id: field.id, value: e.target.value }))}
                    />
                )}
            </div>
        ));
    }, [activeTab, journeyType, formData, dispatch]);

    const handleTabChange = (tabName: string) => {
        dispatch(setActiveTab(tabName));
        dispatch(clearFormData());
    };

    return (
        <div className={styles.bookingForm}>
            {/* Render trip type buttons */}
            <div className={styles.tripTypes}>
                {formVariants.map((variant) => (
                    <button
                        key={variant.name}
                        className={`${styles.tripType} ${activeTab === variant.name ? styles.active : ''}`}
                        onClick={() => handleTabChange(variant.name)}
                    >
                        {variant.name}
                    </button>
                ))}
            </div>

            {/* Render journey type buttons for Outstation tab */}
            {activeTab === 'Outstation' && (
                <div className={styles.journeyTypes}>
                    {['One Way', 'Round Trip'].map((type) => (
                        <button
                            key={type}
                            className={`${styles.journeyType} ${journeyType === type ? styles.active : ''}`}
                            onClick={() => dispatch(setJourneyType(type as 'One Way' | 'Round Trip'))}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            )}

            {/* Render form input fields */}
            <div className={styles.formInputs}>
                {renderFields()}
            </div>

            {/* Explore Cabs button */}
            <div className={styles.buttonDiv}>
                <button className={styles.exploreCabs}>EXPLORE CABS</button>
            </div>
        </div>
    );
}
