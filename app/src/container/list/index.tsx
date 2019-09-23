import * as React from 'react';
import { formService} from '../../service';
import { Col, TableHeader, TableBody, ContentTable, Section, ButtonStyle } from './styled';

interface State {
  data: object;
}

export class List extends React.Component<{},State> {
  constructor(props){
    super(props);
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    formService.get()
    .then((response) => {
      this.setState({data: response});
    })
    .catch((error) => console.error(error))
  }

  render() {
    const { data } = this.state;
    return(
      <Section>
        <ContentTable>
          <TableHeader>
            <Col>Nº</Col>
            <Col>Nombre</Col>
            <Col>Apellidos</Col>
            <Col>Edad</Col>
            <Col>Fecha de Nacimiento</Col>
          </TableHeader>
          {
            Object.keys(data).map((item, index) => {
              return(
                <TableBody key={index}>
                  <Col>{index}</Col>
                  <Col>{data[item]['name']}</Col>
                  <Col>{data[item]['lastName']}</Col>
                  <Col>{data[item]['age']} </Col>
                  <Col>{data[item]['birthday']} </Col>
                </TableBody>
              )
            })
          }
        </ContentTable>
        <ButtonStyle href="average">
            Regresar
        </ButtonStyle>
      </Section>
    )
  }
}
