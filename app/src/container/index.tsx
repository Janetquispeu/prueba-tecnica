import * as React from 'react';
import { Form } from './form';

export class WrapperForm extends React.Component<{},{}> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return(
      <Form/>
    )
  }
}
