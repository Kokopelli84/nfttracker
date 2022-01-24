import React, { ChangeEventHandler, useState } from 'react';
import Button from './form/button';
import Form from './form/form';
import Input from './form/input';

interface MintFormProps {
  title: string;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
}

const MintForm = ({ title, handleSubmit }: MintFormProps) => {
  const [nameInput, setNameInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [file, setFile] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    const elName = e.target.name;
    const { value } = e.target;

    if (elName === 'name') {
      setNameInput(value);
    } else if (elName === 'description') {
      setDescriptionInput(value);
    } else if (elName === 'upload') {
      setFile(e.target.files[0]);
    }
  };

  const disabled = !nameInput || !descriptionInput || !file;

  return (
    <Form handleSubmit={(e) => handleSubmit(e, file, nameInput, descriptionInput)} title={title} titleColour="text-white">
      <Input name="name" placeholder="NFT Name" handleChange={handleChange} minLength={1} />
      <Input
        name="description"
        placeholder="NFT Description"
        handleChange={handleChange}
        minLength={1}
      />
      <Input name="upload" type="file" handleChange={handleChange} />

      <Button
        handleSubmit={e => handleSubmit(e, file, nameInput, descriptionInput)}
        disabled={disabled}
        action="Mint"
      />
    </Form>
  );
};

export default MintForm;
