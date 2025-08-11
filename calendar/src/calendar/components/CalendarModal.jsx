import { addHours, differenceInSeconds, set } from 'date-fns';
import { useEffect, useMemo, useState } from 'react';

import Modal from 'react-modal'
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { es } from 'date-fns/locale/es';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { useUiStore } from '../../hooks/useUiStore';
import { useCalendarStore } from '../../hooks/useCalendarStore';

registerLocale('es', es)

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      maxHeight: '90vh',         // 👈 Limita alto máximo
      overflowY: 'auto', 
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '20px',
      width: '500px',            // 👈 Más ancho si lo deseas
      borderRadius: '10px'
    },
  };

  Modal.setAppElement('#root');

export const CalendarModal = () => {

  const {isDateModalOpen, closeDateModal } = useUiStore()
  const {activeEvent, startSavingEvent} = useCalendarStore();

  const [formSubmitted, setFormSubmitted] = useState(false)


const [formValues, setFormValues] =  useState({
  title: 'Victoria',
  notes: 'Kolomytseva',
  start: new Date(),
  end: addHours -(new Date(), 2),
});

const titleClass =  useMemo(() =>{
  if( !formSubmitted) return '';
  
  return (formValues.title.length >  0)
    ? ''
    : 'is-invalid'

}, [formValues.title, formSubmitted])

useEffect(() => {
  if(activeEvent !== null){
    setFormValues({ ...activeEvent})
  }

}, [activeEvent])
 
  const onInputChange = ({target}) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  const onDateChancged = (event, changing) => {
    setFormValues({
      ...formValues,
      [changing]: event
    })
  }

    const oncloseModal = () => {
       closeDateModal()
 
    }


   const onSubmit = async (event) => {
         event.preventDefault();
         setFormSubmitted(true)

      const difference = differenceInSeconds(formValues.end, formValues.start);
    

      if (isNaN(difference) || difference <= 0) {
        Swal.fire('Fechas incorrectas', 'Revisar las fechas ingresadas', 'error')
        return;
      }
      
      if (formValues.title.length <= 0 ) return;

      console.log(formValues);

    await  startSavingEvent(formValues);
      closeDateModal();
      setFormSubmitted(false);
   }

  return (
 <Modal
 isOpen={isDateModalOpen}
 onRequestClose={oncloseModal}
 style={customStyles}

 >
 <h1> Nuevo evento </h1>
<hr />
<form className="container" onSubmit={onSubmit}>

    <div className="form-group mb-2">
        <label>Fecha y hora inicio</label>
        <DatePicker
        selected={formValues.start}
        onChange={(event)  => onDateChancged(event, 'start') }
        className='form-control'
        dateFormat='Pp'
        showTimeSelect
        locale='es'
        timeCaption='Hora'
        />
    </div>

    <div className="form-group mb-2">
        <label>Fecha y hora fin</label>
        <DatePicker
        minDate={formValues.start}
        selected={formValues.end}
        onChange={(event)  => onDateChancged(event, 'end') }
        className='form-control'
        dateFormat='Pp'
        showTimeSelect
           locale='es'
             timeCaption='Hora'
        />
    </div>

    <hr />
    <div className="form-group mb-2">
        <label>Titulo y notas</label>
        <input 
            type="text" 
            className={`form-control ${titleClass}`}
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={formValues.title}
            onChange={onInputChange}
        />
        <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
    </div>

    <div className="form-group mb-2">
        <textarea 
            type="text" 
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={formValues.notes}
            onChange={onInputChange}
        ></textarea>
        <small id="emailHelp" className="form-text text-muted">Información adicional</small>
    </div>

    <button
        type="submit"
        className="btn btn-outline-primary btn-block"
    >
        <i className="far fa-save"></i>
        <span> Guardar</span>
    </button>

</form>
 </Modal>
  )
}
