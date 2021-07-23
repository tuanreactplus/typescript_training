import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/atom/Button";
import {Select} from "./components/atom/Select";
import {Input} from "./components/atom/Input";
import {Label} from "./components/atom/Label";

function App() {
  const option_select= [
    {
      label: 'option 1',
      value: 'opt1'
    },
    {
      label: 'option 2',
      value: 'opt2'
    }
  ]
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = (value:any) => {
    value.preventDefault();
    setIsSubmit(true);
    if(name ==='tuan' && password ==='1'){
      setIsSuccess(true);
    }else setIsSuccess(false);
  }
  const handleChangeName = (value:string) => {
    setName(value);

  }
  const handleChangePassword = (value: string) => {
    setPassword(value);

  }
  useEffect(() => {
    setIsSubmit(false);
  },[name, password])
  return (
      <div className="App">
        <Select options={option_select} />
        <form onSubmit={(e) => handleSubmit(e)}>
          <Label text={'username'} />
          <Input  type={'text'} onChange={handleChangeName} /><br/>
          <Label text={'password'} />
          <Input  type={'password'} onChange={handleChangePassword} />
          <div>
            <Button>Login</Button>
          </div>
        </form>
        {isSubmit && isSuccess && <Label text ={'success'} />}
        {isSubmit && !isSuccess && <Label text={'!User name or password was wrong'}/> }

      </div>
  );
}

export default App;
