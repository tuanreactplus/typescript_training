import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/atom/Button";
import {Select} from "./components/atom/Select";
import {Input} from "./components/atom/Input";
import {Label} from "./components/atom/Label";
import {Form} from "./components/molecules/Form";

function App() {
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
  return (
      <div className="App">
        <Select>
          <option value="option 1">option 1</option>
          <option value="option 2">option 2</option>
        </Select>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Label text={'username'} />
          <Input id={'name'} type={'text'} onChange={handleChangeName} /><br/>
          <Label text={'password'} />
          <Input id={'password'} type={'password'} onChange={handleChangePassword} />
          <div>
            <Button text={'Login'} />
          </div>
        </Form>
        {isSubmit && isSuccess && <Label text={'success'} /> }
        {isSubmit && !isSuccess && <Label text={'please enter username: tuan and password: 1'}/> }

      </div>
  );
}

export default App;
