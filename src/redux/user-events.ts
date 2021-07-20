import { AnyAction } from 'redux';

interface UserEvents {
  id: number;
  title: string;
  dateStart: string;
  dateEnd: string;
}

interface UserEventsState {
  byIds: Record<UserEvents['id'], UserEvents>;
  allIds: UserEvents['id'][];
}

const initialState: UserEventsState = {
  byIds: {},
  allIds: [],
};

const userEventsReducer = (
  state: UserEventsState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userEventsReducer;
