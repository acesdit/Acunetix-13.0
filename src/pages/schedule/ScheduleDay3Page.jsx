import React from 'react';
import ScheduleDayPage from '@/pages/schedule/ScheduleDayPage';

const scheduleEvents = [
  { id: 1, name: 'TREASURE TROVE', location: 'Campus Grounds', time: '11:00 AM' },
  { id: 2, name: 'DPL', location: 'Auditorium', time: '03:00 PM' },
];

function ScheduleDay3Page() {
  return <ScheduleDayPage dayLabel="29th March" scheduleEvents={scheduleEvents} />;
}

export default ScheduleDay3Page;
