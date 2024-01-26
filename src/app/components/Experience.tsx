import React from 'react';

import {experienceAndEducation} from '../constants';

import ExperienceSection from './CvSubcomponents/ExperienceSection';
const FirstComponent: React.FC = () => (
  <section
    id="experience"
    className="mb-5 min-h-[100vh] flex-col rounded-lg pt-[15vh] lg:m-[5%]">
    <ExperienceSection content={experienceAndEducation} />
  </section>
);

export default FirstComponent;
