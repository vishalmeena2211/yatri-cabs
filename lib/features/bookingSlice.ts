import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookingState {
    activeTab: string;
    journeyType: 'One Way' | 'Round Trip';
    formData: { [key: string]: string };
}

const initialState: BookingState = {
    activeTab: 'Outstation',
    journeyType: 'One Way',
    formData: {},
};

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        setActiveTab(state, action: PayloadAction<string>) {
            state.activeTab = action.payload;
        },
        setJourneyType(state, action: PayloadAction<'One Way' | 'Round Trip'>) {
            state.journeyType = action.payload;
        },
        updateFormData(state, action: PayloadAction<{ id: string; value: string }>) {
            const { id, value } = action.payload;
            state.formData[id] = value;
        },
        clearFormData(state) {
            state.formData = {};
        },
    },
});

export const { setActiveTab, setJourneyType, updateFormData, clearFormData } = bookingSlice.actions;

export default bookingSlice.reducer;