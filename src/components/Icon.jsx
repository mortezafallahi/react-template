import { cn } from '@heroui/react';
import PropTypes from 'prop-types';

export default function Icon({ className, name, strokeWidth = 1 }) {
  return (
    <svg
      className={cn('size-5 text-primary', className)}
      strokeWidth={strokeWidth}>
      <use xlinkHref={`/icons.svg#${name}`}></use>
    </svg>
  );
}

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  strokeWidth: PropTypes.number,
};
