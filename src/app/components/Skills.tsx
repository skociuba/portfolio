import React from 'react';

import {skills} from '../constants';

import Section from './CvSubcomponents/SkillSection';

const Skills: React.FC = () => (
  <section
    id="skills"
    className="mb-5 min-h-[100vh] flex-col rounded-lg pt-[15vh] lg:m-[5%]">
    <Section content={skills} />
  </section>
);

export default Skills;
