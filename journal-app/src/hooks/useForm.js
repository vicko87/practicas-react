import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );

    const [formValidation, setFormValidation] = useState({});

    useEffect(() => {
        createValidatiors();
    }, [formState])

    useEffect(() =>{
   setFormState(initialForm);
    }, [initialForm])

    const isFormValid = useMemo(() => {
        for (const formValue of Object.keys(formValidation)){
          if (formValidation [formValue] !== null ) return false;
    }

        return true;

    }, [formValidation])
  
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidatiors = () => {

        const formCheckValues = {}

        for (const formField of Object.keys(formValidations)) {
           const [fn, errorMessage] = formValidations[formField];

           formCheckValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
            
        }

        setFormValidation(formCheckValues);
        console.log(formCheckValues)

    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ... formValidation,
        isFormValid
    }
}