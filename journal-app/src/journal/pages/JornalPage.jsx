import { IconButton} from "@mui/material"
import { AddOutlined } from "@mui/icons-material"
import { JournalLayout } from "../layout/JournalLayout"
import {NothingSelectedView} from '../views'
import { NoteView } from "../views"

export const JornalPage = () => {
  return ( 
    <JournalLayout>
 {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nisi officia totam voluptates et dolorum rem aperiam, sint labore repudiandae, error, veniam sequi ullam assumenda soluta facilis ut architecto doloribus?</Typography>*/}
    
     <NothingSelectedView/>
   {/*<NoteView/>*/}

   <IconButton
    size= 'large'
    sx={{
      color:'white',
      backgroundColor: 'error.main',
      ':hover': {backgroundColor: 'error.main', opacity: 0.9},
      position: 'fixed',
      right: 50,
      bottom: 50
    }}
   >
  <AddOutlined sx={{ fontSize: 15}}/>

   </IconButton>


    </JournalLayout>
  )
}
