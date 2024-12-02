import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Dayjs } from 'dayjs';
import { Input } from '../Input/Input';
import { Calendar } from '../Calendar/Calendar';
import { FaCalendarAlt } from 'react-icons/fa';
import { WiredInput as _WiredInput } from 'wired-elements/lib/wired-input.js';

interface DateTimePickerProps {
  /**
   * The initial datetime value
   */
  defaultValue?: Dayjs;
  /**
   * Callback function when datetime changes
   */
  onChange?: (datetime: Dayjs) => void;
}

const DateTimePickerContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const CalendarIcon = styled(FaCalendarAlt)`
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

const CalendarWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
`;

const TimeInput = styled.input`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  outline: none;
  background: transparent;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  padding: 0;
  margin: 0 5px;
  text-align: center;
  
  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  defaultValue,
  onChange
}) => {
  const [selectedDateTime, setSelectedDateTime] = useState<Dayjs | undefined>(defaultValue);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const inputRef = useRef<_WiredInput>(null);
  const dateTimePickerRef = useRef<HTMLDivElement>(null);

  const handleInputClick = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  const handleDateChange = (date: Dayjs) => {
    const newDateTime = selectedDateTime ?
      date.hour(selectedDateTime.hour()).minute(selectedDateTime.minute()) :
      date;
    setSelectedDateTime(newDateTime);
    setIsCalendarVisible(false);
    if (onChange) {
      onChange(newDateTime);
    }
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedDateTime && event.target.value) {
      const [hours, minutes, seconds = '0'] = event.target.value.split(':');
      const newDateTime = selectedDateTime
        .hour(parseInt(hours, 10))
        .minute(parseInt(minutes, 10))
        .second(parseInt(seconds, 10));
      setSelectedDateTime(newDateTime);
      if (onChange) {
        onChange(newDateTime);
      }
    }
  };

  const handleTimeInputClick = () => {
    if (!selectedDateTime) {
      setIsCalendarVisible(true);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dateTimePickerRef.current &&
      !dateTimePickerRef.current.contains(event.target as Node)
    ) {
      setIsCalendarVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <DateTimePickerContainer ref={dateTimePickerRef}>
      <Input
        ref={inputRef}
        value={selectedDateTime ? selectedDateTime.format('YYYY-MM-DD') : ''}
        readonly
        width='185px'
        onClick={handleInputClick}
      />
      <TimeInput
        type="time"
        value={selectedDateTime ? selectedDateTime.format('HH:mm:ss') : ''}
        onChange={handleTimeChange}
        step="1"
        onClick={handleTimeInputClick}
      />
      <CalendarIcon />
      {isCalendarVisible && (
        <CalendarWrapper>
          <Calendar
            selected={selectedDateTime}
            onSelected={(date: Dayjs) => handleDateChange(date)}
          />
        </CalendarWrapper>
      )}
    </DateTimePickerContainer>
  );
};
