// example form with one field
// form:[{
//     name: String(*),
//     value: String(*),
//     validation: [{ func: func, message: String,any:{anyPropsForValidation} }],
//     extra: { extraProps },
//  }]

import styled from "styled-components";
import { Button } from "../Button";
import { Input } from "../Input";

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;

const formGenerator = ({
  form = [],
  error = {},
  setForm = () => {},
  setError = () => {},
  className,
  submitText,
  onSubmit = () => {},
}) => {
  const _formJSX = [];

  const createField = (field) => (
    <Input
      key={field.name}
      name={field.name}
      title={field.title}
      value={field.value}
      error={!!error[field.name]}
      helperText={error[field.name]}
      onChange={changeFieldHendler}
      {...field.extra}
    />
  );

  const onSubmitHendler = (e) => {
    e.preventDefault();
    validationField();
    const _form = form.reduce((acc, item) => {
      return Object.assign(acc, { [item.name]: item.value });
    }, {});
    const noEmptyString = Object.values(_form).every((text) => !!text.length);
    const isNoErrors = Object.values(error).every((error) => !error.length);
    if (noEmptyString && isNoErrors) onSubmit(_form);
  };

  const validationField = (_form = form) => {
    let _errors = { ...error };
    for (const field of _form) {
      if (field.validation) {
        for (const validationItem of field.validation) {
          if (validationItem.func(field.value, { ...validationItem.extra })) {
            _errors = Object.assign(_errors, {
              [field.name]: validationItem.message,
            });
            break;
          } else {
            _errors = Object.assign(_errors, { [field.name]: "" });
          }
        }
      }
    }
    setError(_errors);
  };
  const changeFieldHendler = (e) => {
    let indexChangesItem;
    const { name, value } = e.target;
    const _form = form.map((item, idx) => {
      if (item.name === name) {
        indexChangesItem = idx;
        return { ...item, value };
      }
      return item;
    });

    !!_form[indexChangesItem].validation &&
      validationField([_form[indexChangesItem]]);
    setForm(_form);
  };

  for (const field of form) {
    _formJSX.push(createField(field));
  }

  const disabledBtn = Object.values(error).every((item) => !!item.length);

  return form.length ? (
    <LoginForm
      className={className ? className : null}
      onSubmit={onSubmitHendler}
    >
      {_formJSX}
      {!!submitText && (
        <Button disabled={disabledBtn} type="submit">
          {submitText}
        </Button>
      )}
    </LoginForm>
  ) : null;
};
export default formGenerator;
