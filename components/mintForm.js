import Input from './form/input';
import Form from './form/form';
import Button from './form/button';
import { useState } from 'react';

const MintForm = ({ title, handleSubmit }) => {
  const [nameInput, setNameInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [file, setFile] = useState('');

  const handleChange = (e) => {
    const elName = e.target.name;
    const value = e.target.value;

    if (elName === 'name') {
      setNameInput(value);
    } else if (elName === 'description') {
      setDescriptionInput(value);
    } else if (elName === 'upload') {
      setFile(e.target.files[0]);
    }
  };

  const disabled = !nameInput || !descriptionInput || !file;
  const disabledText = disabled && 'disabled';

  return (
    <Form title={title} titleColour={'text-white'}>
      <Input
        name="name"
        placeholder="NFT Name"
        handleChange={handleChange}
        minLength="1"
      />
      <Input
        name="description"
        placeholder="NFT Description"
        handleChange={handleChange}
        minLength="1"
      />
      <Input name="upload" type="file" handleChange={handleChange} />

      <Button
        handleSubmit={(e) => handleSubmit(e, file, nameInput, descriptionInput)}
        disabled={disabledText}
        action="Mint"
      />
    </Form>
  );
};

export default MintForm;
