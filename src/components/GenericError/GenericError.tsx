import React from 'react';

interface GenericErrorProps {
  className?: string;
}

const GenericError = (props: GenericErrorProps) => {
  return <div {...props}>Oops, something went wrong...</div>;
};

export default GenericError;
