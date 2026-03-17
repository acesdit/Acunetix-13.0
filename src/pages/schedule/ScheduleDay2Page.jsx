import React from 'react';
import ScheduleDayPage from '@/pages/schedule/ScheduleDayPage';

const scheduleEvents = [
  { id: 1, name: 'ESCAPE ROOM', location: 'Room 105', time: '12:00 PM' },
  { id: 2, name: 'CTRL+ALT+ELITE', location: 'Lab 3', time: '02:00 PM' },
];

function ScheduleDay2Page() {
  return <ScheduleDayPage dayLabel="28th March" scheduleEvents={scheduleEvents} />;
}

export default ScheduleDay2Page;
