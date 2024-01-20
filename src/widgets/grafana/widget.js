import credentialedProxyHandler from "utils/proxy/handlers/credentialed";

const widget = {
  api: "{url}/api/{endpoint}",
  proxyHandler: credentialedProxyHandler,

  mappings: {
    alerts: {
      endpoint: "alerts",
    },
    alertmanager: {
      endpoint: "alertmanager/grafana/api/v2/alerts",
    },
    stats: {
      endpoint: "admin/stats",
      validate: ["dashboards"],
    },
  },
};

export default widget;
