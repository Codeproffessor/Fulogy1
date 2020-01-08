import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';

import './index.scss';

class LampsBuilder extends PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Lamps Builder</title>
          <meta name="description" content="Best lamps builder" />
        </Helmet>
        <h1>LampsBuilder</h1>
      </div>
    );
  }
}

export default LampsBuilder;