export const MOCK_DASHBOARD_USER = {
  first_name: "Emma",
  last_name: "Sales",
} as const;

export const MOCK_DASHBOARD_TASKS = [
  {
    task_id: "1",
    task_name: "Follow up with Michael Carter",
    task_description: "Call back regarding roof replacement estimate.",
    status: "TODO",
    date_start: "2026-06-02T09:00:00Z",
    due_date: "Jun 5",
  },
  {
    task_id: "2",
    task_name: "Send contract to Sarah Johnson",
    task_description: "Email signed contract and payment schedule.",
    status: "In Progress",
    date_start: "2026-06-01T10:00:00Z",
    due_date: "Jun 3",
  },
  {
    task_id: "3",
    task_name: "Review production schedule",
    task_description: "Confirm crew availability for next week.",
    status: "Done",
    date_start: "2026-05-28T14:00:00Z",
    due_date: "May 30",
  },
] as const;

export const EVENT_TYPE_COLORS: Record<string, string> = {
  EV0001: "#1976d2",
  EV0002: "#43a047",
  EV0003: "#9e9e9e",
  EV0004: "#e53935",
  EV0005: "#8e24aa",
};

export const EVENT_TYPE_NAMES: Record<string, string> = {
  EV0001: "Appointment",
  EV0002: "Production",
  EV0003: "Block",
  EV0004: "Holidays",
  EV0005: "Event",
};

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = (offset: number) =>
  String(today.getDate() + offset).padStart(2, "0");

export const MOCK_DASHBOARD_EVENTS = [
  {
    id: "ev-1",
    start: `${year}-${month}-${day(0)}T10:00:00`,
    end: `${year}-${month}-${day(0)}T11:00:00`,
    event_title: "Site Visit",
    event_note: "Roof inspection — bring ladder kit.",
    times_start: "10:00:00",
    time_end: "11:00:00",
    event_type_id: "EV0001",
    address_line1: "2418 Ridgeview Dr",
    city: "Austin",
    state: "TX",
    postal_code: "78704",
    color: EVENT_TYPE_COLORS.EV0001,
  },
  {
    id: "ev-2",
    start: `${year}-${month}-${day(2)}T08:00:00`,
    end: `${year}-${month}-${day(2)}T17:00:00`,
    event_title: "Production Start",
    event_note: "Roof repair — crew on site.",
    times_start: "08:00:00",
    time_end: "17:00:00",
    event_type_id: "EV0002",
    address_line1: "902 Oak Lane",
    city: "Austin",
    state: "TX",
    postal_code: "78701",
    color: EVENT_TYPE_COLORS.EV0002,
  },
  {
    id: "ev-3",
    start: `${year}-${month}-${day(5)}T00:00:00`,
    end: `${year}-${month}-${day(5)}T23:59:00`,
    event_title: "Memorial Day",
    event_note: "Office closed.",
    times_start: "00:00:00",
    time_end: "23:59:00",
    event_type_id: "EV0004",
    color: EVENT_TYPE_COLORS.EV0004,
  },
  {
    id: "ev-4",
    start: `${year}-${month}-${day(7)}T14:00:00`,
    end: `${year}-${month}-${day(7)}T15:00:00`,
    event_title: "Team Meeting",
    event_note: "Weekly sales pipeline review.",
    times_start: "14:00:00",
    time_end: "15:00:00",
    event_type_id: "EV0005",
    color: EVENT_TYPE_COLORS.EV0005,
  },
  {
    id: "ev-5",
    start: `${year}-${month}-${day(1)}T12:00:00`,
    end: `${year}-${month}-${day(1)}T13:00:00`,
    event_title: "Blocked — Admin",
    event_note: "Lunch block.",
    times_start: "12:00:00",
    time_end: "13:00:00",
    event_type_id: "EV0003",
    color: EVENT_TYPE_COLORS.EV0003,
  },
] ;

export const METRICS = {
  opportunities: 24,
  set: 8,
  sold: 3,
  sold_value: 125000,
  closed: 12,
} as const;
