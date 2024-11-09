import React, { useState } from 'react';

const ControlledFlow = ({ children, onDone, onNext, currentStepIdx }) => {
  const goNext = (dataFromStep) => {
    onNext(dataFromStep);
  };

  const CurrentChild = React.Children.toArray(children)[currentStepIdx];

  if (React.isValidElement(CurrentChild)) {
    return React.cloneElement(CurrentChild, { goNext });
  }

  return null;
};

export default ControlledFlow;
