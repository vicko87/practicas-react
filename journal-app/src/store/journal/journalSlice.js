import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
     name: 'journal',
   initialState: {
 isSaving: true,
 messageSaved: '',
 notes: [],
 active: null,
 //active: {
  //  id: 'ABC213',
   // title: '',
   // body: '',
   // date:1234567,
   // imageUrls: [],// https://foto1.jpg, https://foto2.jpg, https://foto3.jpg
 //}
    },
 reducers: {
   addNewEmptyNote: (state, action ) => {

   },
     setActiveNote: (state, action) => {

     },
     setNotes: (state, action) => {

     },
     setSaving: (state) => {

     },
     updateNote: (state, action) => {

     },
     deleteNoteById: (state, action) => {

     },
 }
});


// Action creators are generated for each case reducer function
export const { 
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById,
              } =  journalSlice.actions;