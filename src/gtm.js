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
