export const push = (options) => {
  if ("dataLayer" in window) {
    window.dataLayer.push({
      event: "custom_event",
      category: options.category,
      action: options.action,
      label: options.label ?? "",
      value: options.value ?? "",
    });
  }
};
export const trackPage = (options) => {
  if ("dataLayer" in window) {
    window.dataLayer.push({
      event: "pageview",
      page: {
        path: options.path,
        title: options.title,
      },
    });
  }
};

export const push2 = (options) => {
  if ("dataLayer" in window) {
    window.dataLayer.push({
      event: "custom_event",
      event_params: {
        category: options.category,
        action: options.action,
        label: options.label ?? "",
        value: options.value ?? "",
      },
    });
  }
};
export const trackPage2 = (options) => {
  if ("dataLayer" in window) {
    window.dataLayer.push({
      event: "page_view",
      event_params: {
        path: options.path,
        title: options.title,
      },
    });
  }
};
