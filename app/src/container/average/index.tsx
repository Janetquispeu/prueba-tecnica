import * as React from 'react';
import { formService} from '../../service';
import { TableHeader, TableBody, Col, ContentTable, Section, ButtonStyle } from './styled';

interface State {
  data: object;
  media: number;
  count: number;
}

export class Average extends React.Component<{},State> {
  constructor(props){
    super(props);
    this.state = {
      data: {},
      media: 0,
      count: 0
    }
  }

  componentDidMount() {
    let num = 0, count;

    formService.get()
      .then((response) => {
        Object.keys(response).map((item, index) => {
          num += Number(response[item]['age']);
          count = index + 1;
          return {num, count};
        });
        this.setState({data: response, media: num/count, count});
      })
      .catch((error) => console.error(error))
  }

  render() {
    let sumSquare = 0;
    const roundMedia = Math.round(this.state.media * 100) / 100;
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
              sumSquare += Math.pow(data[item]['age'] -  this.state.media, 2);

              return(
                <TableBody key={index}>
                  <Col style={{width: '20%'}}>
                    {index}
                  </Col>
                  <Col style={{width: '20%'}}>
                    {data[item]['age']}
                  </Col>
                  <Col style={{width: '20%'}}>
                    {data[item]['age']} - {roundMedia} 
                    = {Math.round((data[item]['age'] -  roundMedia) * 100)/100}
                  </Col>
                  <Col style={{width: '20%'}}>{Math.round((data[item]['age'] -  roundMedia)*100)/100}^2 
                  = {Math.round(Math.pow(data[item]['age'] - roundMedia, 2)*100)/100} </Col>
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
          <b>S = {Math.round(Math.sqrt(sumSquare/(this.state.count - 1))*100)/100}</b>
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
