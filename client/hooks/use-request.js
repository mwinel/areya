import axios from "axios";
import { useState } from "react";

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
    } catch (err) {
      setErrors(
        <div>
          {err.response.data.errors.map((err) => (
            <div className="alert alert-danger" key={err.message}>
              {err.message}
            </div>
          ))}
        </div>
      );
    }
  };

  return { doRequest, errors };
};

export default useRequest;
