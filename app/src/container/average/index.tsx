import * as React from 'react';
import { formService} from '../../service';
import { TableHeader, TableBody, Col, ContentTable, Section, ButtonStyle } from './styled';

interface State {
  data: object;
  media: number;
  sumSquare: number;
}

export class Average extends React.Component<{},State> {
  constructor(props){
    super(props);
    this.state = {
      data: {},
      media: 0,
      sumSquare: 0
    }
  }

  componentDidMount() {
    let num = 0, count, square = 0;

    formService.get()
    .then((response) => {
      this.setState({data: response});
      Object.keys(response).map((item, index) => {
        num += Number(response[item]['age']);
        count = index + 1;
        return {num, count};
      });
      this.setState({media: num /count, sumSquare: square});
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
            <Col style={{width: '20%'}}>Edad</Col>
            <Col style={{width: '20%'}}>x-X</Col>
            <Col style={{width: '20%'}}>(x-X)^2</Col>
          </TableHeader>
          {
            Object.keys(data).map((item, index) => {
              return(
                <TableBody key={index}>
                  <Col style={{width: '20%'}}>{index}</Col>
                  <Col style={{width: '20%'}}>{data[item]['age']}</Col>
                  <Col style={{width: '20%'}}>{data[item]['age']} - {this.state.media} = {data[item]['age'] -  this.state.media}</Col>
                  <Col style={{width: '20%'}}>({data[item]['age'] -  this.state.media})^2 = {Math.pow(data[item]['age'] -  this.state.media, 2)} </Col>
                </TableBody>
              )
            })
          }
        </ContentTable>
        <br/>
        <div>
          <div>X: Media Aritmética - Promedio de edades</div>
          <b>X = {this.state.media} </b>
        </div>
        <br/>
        <div>
          <div>S: Desviación Estándar</div>
          <b>S =  </b>
        </div>
        <div>
          <ButtonStyle href="list">
            Next
          </ButtonStyle>
          <ButtonStyle href="form">
            Regresar
          </ButtonStyle>
        </div>
      </Section>
    )
  }
}
