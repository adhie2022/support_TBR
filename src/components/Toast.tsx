import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="toast-container" role="status" aria-live="polite">
      <div className="toast">
        <CheckCircle2 size={18} className="toast-icon" aria-hidden="true" />
        <span>{message}</span>
      </div>
    </div>
  );
};
