import React, { useEffect, useState } from "react";

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
    console.log("push2", options);
    window.dataLayer.push({
      event: "custom_event_GA4",
      event_params: {
        category: options.category,
        action: options.action,
        label: options.label ?? "",
        value: options.value ?? "",
        path: undefined,
        title: undefined,
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
        category: undefined,
        action: undefined,
        label: undefined,
        value: undefined,
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
  const stopTimer = async () => {
    setEnd(Date.now());
    return Date.now() - start;
  };

  useEffect(() => {
    if (start && end) {
      setDuration(end - start);
    }
  }, [end]);

  useEffect(() => {
    console.log("start", start);
    console.log("end", end);
    console.log("duration", duration);
  }, [start, end, duration]);

  const trackDuration = (options) => {
    if ("dataLayer" in window) {
      console.log("hey");
      window.dataLayer.push({
        event: "time_tracking",
        event_params: {
          flow: options.flow,
          duration: options.duration,
          category: undefined,
          action: undefined,
          label: undefined,
          value: undefined,
        },
      });
    }
    // push2({
    //   category: options.category,
    //   action: options.action,
    //   label: options.label,
    //   value: duration,
    // });
  };

  return {
    startTimer,
    stopTimer,
    trackDuration,
  };
};
