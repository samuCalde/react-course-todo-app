import React from "react";

function useLocalStorage(itemName, initalValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initalValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initalValue));
          parsedItem = initalValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    }, 1000);
  });

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch (err) {
      setError = err;
    }
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
