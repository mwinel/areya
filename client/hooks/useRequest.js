import { useState } from "react";
import axios from "axios";

import { Text } from "../components";

const useRequest = ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    try {
      setErrors(null);
      const response = await axios[method](url, body);
      if (onSuccess) {
        onSuccess(response.data);
      }
      return response.data;
    } catch (error) {
      setErrors(
        <div className="rounded bg-red-100 p-3 mb-4">
          {error.response.data.errors.map((err) => (
            <div key={err.message}>
              <div className="flex">
                <div className="ml-3">
                  <Text variant="small" className="text-red bg-red-100">
                    {err.message}
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  };

  return { doRequest, errors };
};

export default useRequest;
