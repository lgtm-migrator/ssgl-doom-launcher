import React, { useState, useEffect } from 'react';
import Box from '#Component/Box';
import styled from 'styled-components';
import { StoreContext } from '#State';
import { remote, ipcRenderer } from 'electron';
import Input from '#Component/Input';
import fuzz from 'fuzzysearch';

const SourcePorts = styled(({ ...rest }) => {
  const { gstate, dispatch } = React.useContext(StoreContext);
  const [sp, setSp] = useState({ name: '', path: '' });
  return (
    <div {...rest}>
      <Box>asdf</Box>

      <Box>
        <form>
          <Input type="text" value={sp.name} label="name" />
          <Input type="text" value={sp.path} label="path" />
        </form>
      </Box>
    </div>
  );
})`
  display: flex;
  margin: 15px;
`;

export default SourcePorts;