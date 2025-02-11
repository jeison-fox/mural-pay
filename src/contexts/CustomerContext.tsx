import { createContext, useContext, useEffect, useState } from "react";
import type { ICustomerContext } from "customTypes/contexts/customerContext";

const CustomerContext = createContext<ICustomerContext>({
  customerId: null,
  updateCustomerId: () => {},
});

export const useCustomer = () => useContext(CustomerContext);

export const CustomerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [customerId, setCustomerId] = useState<string | null>(null);

  useEffect(() => {
    const storedCustomerId = localStorage.getItem("customerId");

    if (storedCustomerId) {
      setCustomerId(storedCustomerId);
    }
  }, []);

  const updateCustomerId = (id: string) => {
    localStorage.setItem("customerId", id);
    setCustomerId(id);
  };

  const value = {
    customerId,
    updateCustomerId,
  };

  return (
    <CustomerContext.Provider value={value}>
      {children}
    </CustomerContext.Provider>
  );
};
