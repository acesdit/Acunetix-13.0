import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import EventDetailsPage from '@/pages/events/EventDetailsPage';
import ScheduleDay1Page from '@/pages/schedule/ScheduleDay1Page';
import ScheduleDay2Page from '@/pages/schedule/ScheduleDay2Page';
import ScheduleDay3Page from '@/pages/schedule/ScheduleDay3Page';

function AppRoutes({ scrollToRefs, scrollToSection, isScrolled }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            scrollToRefs={scrollToRefs}
            scrollToSection={scrollToSection}
            isScrolled={isScrolled}
          />
        }
      />
      <Route path="/schedule/1" element={<ScheduleDay1Page />} />
      <Route path="/schedule/2" element={<ScheduleDay2Page />} />
      <Route path="/schedule/3" element={<ScheduleDay3Page />} />
      <Route path="/events/:eventName" element={<EventDetailsPage />} />
    </Routes>
  );
}

export default AppRoutes;
