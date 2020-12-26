import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Icon from 'react-icons-kit';
import {EXPERIENCES} from 'utils/constants';

const Experience = () => {
  const experiences = EXPERIENCES.map((entry) => {
    return (
      <VerticalTimelineElement
        key={entry.date}
        className="vertical-timeline-element--work"
        date={entry.date}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<Icon style={{ display: 'block', position: 'relative', top: '43%'}} icon={entry.icon} />}
      >
        <h3
          className="vertical-timeline-element-title"
        >
          {entry.location}
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
        >
          {entry.position}
        </h4>
        <p>
          {entry.description}
        </p>
      </VerticalTimelineElement>
    );
  });

  return (
    <VerticalTimeline>
      {experiences}
    </VerticalTimeline>
  );
};

export default Experience;