import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tables: [
    {
      id: 1,
      seats: [
        { id: 1, guest: null },
        { id: 2, guest: null },
        { id: 3, guest: null },
        { id: 4, guest: null },
        { id: 5, guest: null },
        { id: 6, guest: null },
        { id: 7, guest: null },
        { id: 8, guest: null },
        { id: 9, guest: null },
        { id: 10, guest: null },
      ],
    },
    {
      id: 2,
      seats: [
        { id: 1, guest: null },
        { id: 2, guest: null },
        { id: 3, guest: null },
        { id: 4, guest: null },
        { id: 5, guest: null },
        { id: 6, guest: null },
        { id: 7, guest: null },
        { id: 8, guest: null },
        { id: 9, guest: null },
        { id: 10, guest: null },
      ],
    },
    {
      id: 3,
      seats: [
        { id: 1, guest: null },
        { id: 2, guest: null },
        { id: 3, guest: null },
        { id: 4, guest: null },
        { id: 5, guest: 'agver' },
        { id: 6, guest: 'qwettr' },
        { id: 7, guest: null },
        { id: 8, guest: null },
        { id: 9, guest: null },
        { id: 10, guest: null },
      ],
    },
    {
      id: 4,
      seats: [
        { id: 1, guest: null },
        { id: 2, guest: null },
        { id: 3, guest: null },
        { id: 4, guest: null },
        { id: 5, guest: null },
        { id: 6, guest: null },
        { id: 7, guest: null },
        { id: 8, guest: null },
        { id: 9, guest: null },
        { id: 10, guest: 'erq' },
      ],
    },
  ],
  activeTable: null,
  activeSeat: null,
  progress: 1,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setActiveTable: (state, action) => {
      state.activeTable = action.payload.table;
    },
    setActiveSeat: (state, action) => {
      state.activeSeat = action.payload.seat;
    },
    setGuestOnSeat: (state, action) => {
      const { table, seat, guest } = action.payload;
      state.tables[table].seats[seat].guest = guest;
    },
    setProgress: (state, action) => {
      state.progress = action.payload;
    },
    clear: (state) => {
      state.activeTable = null;
      state.activeSeat = null;
      state.progress = 1;
    },
  },
});

export const activeTableSelect = (state) => state.data.activeTable;
export const activeSeatSelect = (state) => state.data.activeSeat;
export const tableSelect = (table) => (state) => state.data.tables[table];
export const progressSelect = (state) => state.data.progress;

export const { setActiveTable, setGuestOnSeat, setProgress, setActiveSeat, clear } = dataSlice.actions;

export default dataSlice.reducer;
