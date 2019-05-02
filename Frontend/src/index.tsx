import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';

import Root from './containers/Root';

render(<Root/>, document.getElementById('appRoot'));