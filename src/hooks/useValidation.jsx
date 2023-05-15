import { useState, useEffect } from "react"



const useValidation = (callback) => {
  const [inputValuesLength,setInputValuesLength] = useState(0)
  const [errorValues,setErrorValues] = useState({})
  const [finalValues,setFinalValues] = useState({})
  //
  const checkValues = (rawValue) => {
    const name = rawValue[0]
    const trimmedValue = rawValue[1].trim()
    //
    if (trimmedValue.length >= 1){
      setFinalValues((oldValues) => {
        return {
          ...oldValues,
          [name]: trimmedValue
        }
      })
      setErrorValues((oldValues) => {
        const errors = { ...oldValues };
        delete errors[name];
        return errors;
      });
    } else {
      setErrorValues((oldValues) => {
        return {
          ...oldValues,
          [name]: {
            isError: true,
            msg: "Can't be empty" 
          } 
        }
      })
      // delete from values
      delete finalValues[name]
    }
  }
  //
  const checkEmail = (rawEmail) => {
    const name = rawEmail[0];
    const trimmedValue = rawEmail[1].trim()
    //
    if (
      !new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ).test(trimmedValue)
    ) {
      setErrorValues((oldValues) => {
        return {
          ...oldValues,
          [name]: {
            isError: true,
            msg: "Invalid Email"
          }
        }
      })
      delete finalValues[name]
    } else {
      setFinalValues((oldValues) => {
        return {
          ...oldValues,
          [name]: trimmedValue
        }
      })
      setErrorValues((oldValues) => {
        const errors = {...oldValues}
        delete errors[name]
        return errors
      })
    }
  }
  //
  const validation = (inputValues) => {
    setInputValuesLength(Object.entries(inputValues).length);
    Object.entries(inputValues).forEach((val) => {
      val[0] === "email" ? checkEmail(val) : checkValues(val);
    })
  }
  //
  const submitValues = () => {
  callback(finalValues)
  }
  //
  const finalValidation = () => {
    const errorsLength = Object.entries(errorValues).length
    const valuesLength = Object.entries(finalValues).length
    //
    if (errorsLength <= 0 && valuesLength >= inputValuesLength) {
      submitValues()
    }
  }
  //
  useEffect(() => {
    if (Object.entries(errorValues).length >= 1 || Object.entries(finalValues).length >=1){
      finalValidation()
    }
  }, [errorValues,finalValues])
  //
  return {validation, errorValues}
}

export default useValidation