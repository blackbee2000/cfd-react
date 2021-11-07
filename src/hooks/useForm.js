import { useState } from "react";

const phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const urlPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/

export const useForm = (initValue = {}) => {
    const [form, setForm] = useState({initValue});
    const [error, setError] = useState({});
    const rules = {};
      
      const handleInputChange = (ev) => {
        let name = ev.currentTarget.name;
        let value = ev.currentTarget.value;
        setForm({
          ...form,
          [name]: value,
        })
      }
  
      const validator = () => {
        let errObject = {};
        for(let i in rules){
            let r = rules[i];
            if(r.required && !form[i]){
                errObject[i] = "*Vui lòng không để trống thông tin";
            }
            if(r.patern){
                let patern = r.patern;
                if(r.patern === 'phone') patern = phonePattern;
                if(r.patern === 'email') patern = emailPattern;
                if(r.patern === 'url') patern = urlPattern;

                if(typeof patern['test'] !== 'undefined'  && !patern?.test(form[i])){
                    errObject[i] = "*Vui lòng nhập đúng định dạng";
                }
            }

            if(r.min && ( typeof form[i] === 'undefined' || form[i].length < r.min)){
                errObject[i] = `Vui lòng nhập lớn hơn ${r.min} ký tự`;
            }

            if(r.max && form[i]?.length > r.max){
                errObject[i] = `Vui lòng nhập nhỏ hơn ${r.max} ký tự`;
            }
        }
        setError(errObject);
        return errObject;
    }

    function register(name, rule){
        if(rule){
            rules[name] = rule;
        }
        return {
            name,
            onChange: handleInputChange,
            value: form[name]
        }
    }

    function handleSubmit(callback){
        return (ev) =>{
            ev.preventDefault();
            let error = validator();
            if(Object.keys(error).length === 0){
                callback(form);
            }
            setError(error);
        }
    }

    return {
        form,
        register,
        error,
        handleSubmit
    }
}