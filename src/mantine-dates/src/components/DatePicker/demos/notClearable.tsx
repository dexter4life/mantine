import React from 'react';
import { DatePicker } from '../DatePicker';

const code = `
<DatePicker placeholder="Pick date" label="Event date" clearable={false} />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker placeholder="Pick date" label="Event date" clearable={false} />
    </div>
  );
}

export const notClearable: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
