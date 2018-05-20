import React from 'react';
import { currentYear } from 'Client/utils/date';

const License = () => <div className='license-wrap'>
  <p className='license'>&copy; {currentYear()} Timothy Foster, All Rights Reserved</p>
</div>;

export default License;
