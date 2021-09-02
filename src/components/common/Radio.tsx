import React from 'react';
import classNames from 'classnames';

type RadioProps = {
  className?: string;
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Radio: React.FC<RadioProps> = ({
  children,
  className,
  id,
  ...restProps
}) => {
  const uid = `radio-id-${id}`;
  return (
    <div className={classNames('form-radio', className)}>
      <input type="radio" id={uid} {...restProps} />
      <label className={id} htmlFor={uid}>
        {children}
      </label>
    </div>
  );
};

export default Radio;
