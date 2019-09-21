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
            <Col style={{width: '20%'}}>Nº</Col>
            <Col style={{width: '20%'}}>Nombre</Col>
            <Col style={{width: '20%'}}>Apellidos</Col>
            <Col style={{width: '20%'}}>Edad</Col>
            <Col style={{width: '20%'}}>Fecha de Nacimiento</Col>
          </TableHeader>
          {
            Object.keys(data).map((item, index) => {
              return(
                <TableBody key={index}>
                  <Col style={{width: '20%'}}>{index}</Col>
                  <Col style={{width: '20%'}}>{data[item]['name']}</Col>
                  <Col style={{width: '20%'}}>{data[item]['lastName']}</Col>
                  <Col style={{width: '20%'}}>{data[item]['age']} </Col>
                  <Col style={{width: '20%'}}>{data[item]['birthday']} </Col>
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
