import { useState } from "react";


export const useEditForm = () => { 
  
    const [fieldsActive, setFieldsActive] = useState({})

    const handlerFieldsActive = ({target}) => {
        //console.log(target.name);
        if(fieldsActive[target.name] && target.value.trim().length < 1) {
          const copy = {...fieldsActive}
          delete copy[target.name]
          setFieldsActive(copy)
        }
        else if(target.value.trim().length > 0) {
            setFieldsActive({...fieldsActive, [target.name] : target.name === 'file'
                ? target.files[0] : target.value
            })
        }
        
    }
    
    return {fieldsActive, setFieldsActive, handlerFieldsActive}

}
