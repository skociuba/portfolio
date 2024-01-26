import React from 'react';

import {summaryContent} from '../constants';

import SummaryComponent from './CvSubcomponents/Summary';

const Summary: React.FC = () => (
  <section
    id="summary"
    className="mb-5 min-h-[100vh] flex-col rounded-lg pt-[15vh] lg:m-[5%]">
    <SummaryComponent content={summaryContent} />
  </section>
);

export default Summary;
