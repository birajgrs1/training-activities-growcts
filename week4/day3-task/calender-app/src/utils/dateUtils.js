import { format, isSameDay } from 'date-fns'

export const formatDate = (date, pattern = 'yyyy-MM-dd') => format(date, pattern)
export const isSameDate = (date1, date2) => isSameDay(date1, date2)

