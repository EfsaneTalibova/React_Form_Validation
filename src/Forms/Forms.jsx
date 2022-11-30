import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Forms.css'
const Forms = () => {
  const [formData, setFormdData] = useState([])
  const [props, setProps] = useState({
    name: "",
    surname: "",
    phone: "",
    eMail: "",
    comment: ""
  })
  const handleInput = (e) => {
    setProps({ ...props, [e.target.name]: e.target.value })
  }




  const emailValidation=(e)=>{
    if(e.target.value.match('@')){
      e.target.style.border="2px solid black"
    }
    else{
      e.target.style.border="2px solid red"
      console.log("@ işarəsini unutmayın")
    }
  }




  const nameRegex = new RegExp(/[0-9]/);  
  const nameValidation=(e)=>{
    if(e.target.value.match(nameRegex)){
      e.target.style.border="2px solid red"
    }
    else{
      e.target.style.border="2px solid black"
    }
  }



  const surnameRegex = new RegExp(/[0-9]/);  
  const surnameValidation=(e)=>{
    if(e.target.value.match(surnameRegex)){
      e.target.style.border="2px solid red"
    }
    else{
      e.target.style.border="2px solid black"
    }
  }

  
  const phoneRegex = new RegExp(/[a-zA-Z]/);
  const phoneValidation=(e)=>{  
    if(e.target.value.match(phoneRegex)){
      e.target.style.border="2px solid red"
    }
    else{
      e.target.style.border="2px solid black"
    }
  }

  
  const btnFun = (e) => {
    e.preventDefault()
    setFormdData([...formData, props])
    alert("name : "+formData[(formData.length)-1].name+"\n"+
        "surname : "+formData[(formData.length)-1].surname+"\n"+
        "phone : "+formData[(formData.length)-1].phone+"\n"+
        "eMail : "+formData[(formData.length)-1].eMail+"\n"
        )
    setProps({
      name: "",
      surname: "",
      phone: "",
      eMail: "",
      comment: ""
    });
  }


  return (
    <div className='formDiv'>
      <form className='formComponent'>
        <label htmlFor="name">Ad: </label>
        <input value={props.name} onChange={e=>{handleInput(e);nameValidation(e)}} type="text" name='name' id='name' />
        <label htmlFor="surname">Soyad: </label>
        <input value={props.surname} onChange={e=>{handleInput(e);surnameValidation(e)}} type="text" name='surname' id='surname' />
        <label htmlFor="phone">Telefon nömrəsi: </label>
        <input value={props.phone} onChange={(e)=>{handleInput(e);phoneValidation(e)}} type="text" name='phone' id='phone' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"></input>
        <label htmlFor="eMail">Email: </label>
        <input value={props.eMail} onChange={e=>{handleInput(e);emailValidation(e)}} type="email" name='eMail' id='eMail' />
        <label htmlFor="comment">Şərh: </label>
        <textarea name="comment" id="comment" cols="22" rows="2"></textarea>
        <button onClick={btnFun} className='btn btn-primary btnCls'>Göndər</button>
      </form>
    </div>
  )
}

export default Forms
