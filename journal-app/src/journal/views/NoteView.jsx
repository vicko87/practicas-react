import { Button, Grid, Typography, TextField, IconButton} from "@mui/material"
import { SaveOutlined, UploadOutlined} from "@mui/icons-material"
import { ImageGallery } from "../components/ImageGallery"
import { useForm } from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo, useRef } from "react"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startSaveNote, startUploadingFiles } from "../../store/journal/thunks"
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'


export const NoteView = () => {

    const disptach = useDispatch()

    const {active: note, messageSaved, isSaving} = useSelector(state  => state.journal)

 const {body, title,  date, onInputChange, formState} = useForm(note)

 const dateString = useMemo(() =>{

    const newDate = new Date(date);
    return newDate.toUTCString();
 }, [date])

 const fileInputRef = useRef()

 useEffect(() =>{
  disptach(setActiveNote(formState));
 }, [formState])

 useEffect(() =>{
    if (messageSaved.length > 0) {
   Swal.fire('Nota actualizada', messageSaved, 'success')
    }
 }, [messageSaved])

 const onSaveNote = () =>{
 
    disptach(startSaveNote())
 }
 

 const onFileInputChange = ({target}) => {
  if (target.files === 0) return;

 disptach (startUploadingFiles(target.files))
 }

    return (
        <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }} className="animate__animated animate__fadeIn animate__faster">
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
            </Grid>
            <Grid item>

                <input 
                type="file" 
                multiple
                ref={fileInputRef}
                onChange={onFileInputChange}
                style={{display: 'none'}}
                />

                <IconButton
                color="primary"
                disabled={isSaving}
                onClick={ () => fileInputRef.current.click()}
                >
            <UploadOutlined/>
                </IconButton>
                <Button 
                disabled={isSaving}
                onClick={onSaveNote}
                color='primary' 
                sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container size={12}>
                <TextField
                    type='text'
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un titulo"
                    label='Título'
                    sx={{ border: 'none', mb: 1 }}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />

<TextField
                    type='text'
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Que sucedió hoy?"
                    label='Título'
                    minRows={5}
                    name="body"
                    value={body}
                    onChange={onInputChange}
               
                />

            </Grid>
        <ImageGallery images={note.imageUrls}/>

        </Grid>
    )
}
