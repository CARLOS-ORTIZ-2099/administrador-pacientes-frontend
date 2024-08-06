import { useState } from "react"


export const useFormFields = () => {
  const [fields, setFields] = useState({})

  const changeFields = ({target}) => {
    setFields((previous) => ( {...previous, [target.name] : target.value} ))
 }


  return {fields, setFields, changeFields}
}
