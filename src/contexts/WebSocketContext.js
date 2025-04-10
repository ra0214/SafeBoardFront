import React, { createContext, useContext, useEffect, useState } from 'react';
import wsService from '../services/websocketService';

const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    return () => {
      wsService.ws?.close();
    };
  }, []);

  const connect = (id_esp32) => {
    wsService.connect(id_esp32);
    setIsConnected(true);
  };

  const disconnect = () => {
    wsService.ws?.close();
    setIsConnected(false);
  };

  return (
    <WebSocketContext.Provider value={{ isConnected, connect, disconnect, wsService }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => {
  return useContext(WebSocketContext);
};