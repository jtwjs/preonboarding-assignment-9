import React from 'react';
import classNames from 'classnames';

import { Priority } from 'components/TodoPriority';

type RadioProps = {
  className?: string;
  id: string;
  priority: Priority;
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Radio: React.FC<RadioProps> = ({
  children,
  className,
  id,
  priority,
  ...restProps
}) => {
  const uid = `radio-id-${id}`;
  return (
    <div className={classNames('form-radio', className)}>
      <input type="radio" id={uid} {...restProps} />
      <label className={priority} htmlFor={uid}>
        {children}
      </label>
    </div>
  );
};

export default Radio;
