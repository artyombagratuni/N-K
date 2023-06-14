import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const initialState = useSelector((state: { init: number }) => state.init);

  return <div className="App">Hello {initialState}</div>;
}

export default App;
