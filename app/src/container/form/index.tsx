import * as React from 'react';
import { Formik } from 'formik';
import { Input } from '../../component/Input';
import { Label } from '../../component/Label';
import { Error } from '../../component/Error';
import { FieldStyle, FormStyle, WrapperStyle, ButtonStyle } from './styled';
import { formService} from '../../service';
import { validations } from './validations';
import { withRouter } from "react-router-dom";

export const Form = ({...props}) => {
  return (
    <WrapperStyle>
      <Formik
        initialValues={
          { name: '',
            lastName: '',
            age: '', 
            birthday: ''
          }
        }
        validationSchema={validations}
        onSubmit={(values) => {
          formService.add(values)
            .then(() => {
              props.history.push("/average");
            })
            .catch((error) => console.error(error));
        }}
      >
        {props => {
          const {
            values,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            touched
          } = props;
          return(
            <FormStyle onSubmit={handleSubmit}>
              <FieldStyle>
                <Label text="Nombre" required/>
                <Input 
                  id="name"
                  value={values['name']}
                  error={errors['name']}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                { errors['name'] && touched['name'] && <Error text={errors['name']}/> }
              </FieldStyle>
              <FieldStyle>
                <Label text="Apellido" required/>
                <Input
                  id="lastName"
                  value={values['lastName']}
                  error={errors['lastName']}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                { errors['lastName'] && touched['lastName'] && <Error text={errors['lastName']}/> }
              </FieldStyle>
              <FieldStyle>
                <Label text="Edad" required/>
                <Input
                  id="age"
                  value={values['age']}
                  error={errors['age']}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                { errors['age'] && touched['age'] && <Error text={errors['age']}/> }
              </FieldStyle>
              <FieldStyle>
                <Label text="Fecha de Nacimiento" required/>
                <Input 
                  id="birthday"
                  value={values['birthday']}
                  error={errors['birthday']}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="dd/mm/aaaa"
                />
                { errors['birthday'] && touched['birthday'] && <Error text={errors['birthday']}/> }
              </FieldStyle>
              <ButtonStyle type="submit" disabled={isSubmitting}>
                Submit
              </ButtonStyle>
            </FormStyle>
          )
        }}
      </Formik>
    </WrapperStyle>
  );
};

export default withRouter(Form);