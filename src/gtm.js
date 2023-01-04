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
      event: "custom_event_GA4",
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
      event: "page_view_GA4",
      event_params: {
        path: options.path,
        title: options.title,
      },
    });
  }
};

export const AnalyticsTimer = () => {
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [duration, setDuration] = useState(0);

  const startTimer = () => {
    setStart(Date.now());
  };
  const stopTimer = () => {
    setEnd(Date.now());
    setDuration(end - start);
  };

  const trackDuration = (options) => {
    if (duration === 0) {
      return "ERROR: duration is 0";
    }
    push2({
      category: options.category,
      action: options.action,
      label: options.label,
      value: duration,
    });
  };

  return {
    startTimer,
    stopTimer,
    trackDuration,
  };
};
