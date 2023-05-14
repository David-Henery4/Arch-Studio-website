import { useState, useEffect } from "react"



const useValidation = (callback) => {
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
      // delete from errors
      delete errorValues[name]
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
    console.log(name, trimmedValue)
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
      delete errorValues[name]
    }
  }
  //
  const validation = (inputValues) => {
    Object.entries(inputValues).forEach((val) => {
      val[0] === "email" ? checkEmail(val) : checkValues(val);
    })
  }
  //
  const submitValues = () => {
  // callback(finalValues)
  }
  //
  useEffect(() => {
    
  }, [])
  //
  return {validation}
}

export default useValidation