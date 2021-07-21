import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { addZero } from '../../lib/utils';
import { RootState } from '../../redux/store';
import {
  selectUserEventsArray,
  loadUserEvents,
  UserEvent,
} from '../../redux/user-events';

import './Calendar.css';

const mapState = (state: RootState) => ({
  events: selectUserEventsArray(state),
});

const mapDispatch = {
  loadUserEvents,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {}

const createDateKey = (date: Date) => {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  return `${year}-${addZero(month)}-${addZero(day)}`;
};

const groupEventsByDay = (events: UserEvent[]) => {
  const groups: Record<string, UserEvent[]> = {};

  const addToGroup = (dateKey: string, event: UserEvent) => {
    if (groups[dateKey] === undefined) {
      groups[dateKey] = [];
    }

    groups[dateKey].push(event);
  };

  events.forEach((event) => {
    const dateStartKey = createDateKey(new Date(event.dateStart));
    const dateEndKey = createDateKey(new Date(event.dateEnd));

    addToGroup(dateStartKey, event);

    if (dateEndKey !== dateStartKey) {
      addToGroup(dateEndKey, event);
    }
  });

  return groups;
};

const Calendar: React.FC<Props> = ({ events, loadUserEvents }) => {
  useEffect(() => {
    loadUserEvents();
  }, []);

  let groupedEvents: ReturnType<typeof groupEventsByDay> | undefined;
  let sortedGroupKeys: string[] | undefined;

  if (events.length) {
    groupedEvents = groupEventsByDay(events);
    sortedGroupKeys = Object.keys(groupedEvents).sort(
      (date1, date2) => +new Date(date1) - +new Date(date2)
    );
  }

  return groupedEvents && sortedGroupKeys ? (
    <div className="calendar">
      {sortedGroupKeys.map((dayKey) => {
        const events = groupedEvents ? groupedEvents[dayKey] : [];
        const groupDate = new Date(dayKey);
        const day = groupDate.getDate();
        const month = groupDate.toLocaleDateString(undefined, {
          month: 'long',
        });

        return (
          <div key={dayKey} className="calendar-day">
            <div className="calendar-day-label">
              <span>
                {day} {month}
              </span>
            </div>
            <div className="calendar-events">
              {events.map((event) => {
                return (
                  <div key={event.id} className="calendar-event">
                    <div className="calendar-event-info">
                      <div className="calendar-event-time">10:00 - 12:00</div>
                      <div className="calendar-event-title">{event.title}</div>
                    </div>
                    <button className="calendar-event-delete-button">
                      &times;
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default connector(Calendar);
