import React from 'react';
import { useSelector } from 'react-redux';

const ErrorLog = () => {
  const logs = useSelector((state) => state.errorLog.logs);

  return (
    <div className="error-log\">
      <h3>Error Logs</h3>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log.time}: {log.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default ErrorLog;
