import * as React from 'react';

export const useMount = (cb: () => void) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => cb(), []);
};
