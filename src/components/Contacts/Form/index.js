import {useState, useEffect} from 'react';

const initialFormValues = {fullname: "", phone_number: ""};
function Form({addContact, contacts}) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(()=> {
    setForm(initialFormValues);
  },[contacts]);

  const onChangeInput = (e) => {
      setForm({...Form, [e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    };
    addContact([...contacts, form]);

    console.log(form);

  };
  return ( 
    <form onSubmit={onSubmit}>
    <div className='add-input' >
      <input name="fullname" placeholder='Full Name' value={form.fullname || ""} onChange={onChangeInput} />
    </div>
    <div>
      <input name="phone_number" placeholder='Form Number' value={form.phone_number || ""} onChange={onChangeInput} />
    </div>
    <div className='btn'>
      <button type='submit'>Add</button>
    </div>


  </form>);
}

export default Form;
