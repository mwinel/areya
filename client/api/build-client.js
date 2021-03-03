import axios from "axios";

const buildClient = ({ req }) => {
  if (typeof window === "undefined") {
    // We are on the server
    return axios.create({
      // baseURL format = 'http://SERVICE_NAME.NAMESPACE.svc.cluster.local'.
      // Run `kubectl get services -n ingress-nginx` to get SERVICE_NAME.
      // Run `kubectl get namespace` to get NAMESPACE.
      baseURL:
        "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
      headers: req.headers,
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseUrl: "/",
    });
  }
};

export default buildClient;
