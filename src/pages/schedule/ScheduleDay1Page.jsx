import React from 'react';
import ScheduleDayPage from '@/pages/schedule/ScheduleDayPage';

const scheduleEvents = [
  { id: 1, name: 'BRAINIAC', location: 'Seminar Hall', time: '11:00 AM' },
  { id: 2, name: 'CODE OF LIES', location: 'Room 301', time: '01:00 PM' },
];

function ScheduleDay1Page() {
  return <ScheduleDayPage dayLabel="27th March" scheduleEvents={scheduleEvents} />;
}

export default ScheduleDay1Page;
