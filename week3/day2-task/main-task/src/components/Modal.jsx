import { useEffect } from "react";

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-green-300 rounded-lg w-full max-w-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

const ModalHeader = ({ children }) => (
  <div className="border-b p-4 flex justify-between items-center">
    <h3 className="text-xl font-semibold">{children}</h3>
  </div>
);

const ModalBody = ({ children }) => (
  <div className="p-4 max-h-[60vh] overflow-y-auto">{children}</div>
);

const ModalFooter = ({ children }) => (
  <div className="border-t p-4 flex justify-end gap-2">{children}</div>
);

export { Modal, ModalHeader, ModalBody, ModalFooter };
