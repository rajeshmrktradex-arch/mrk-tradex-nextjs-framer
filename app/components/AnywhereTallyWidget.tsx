"use client";

import { useEffect } from "react";

const WIDGET_SCRIPT_ID = "anywhere-tally-widget-loader";
const WIDGET_HOST_ID = "awt-chat-widget-host";
const WIDGET_KEY = "awt_widget_pk_XbovnEsQtbRCKLh5ifSBkP3AodJKf2-J";

export default function AnywhereTallyWidget() {
  useEffect(() => {
    if (document.getElementById(WIDGET_HOST_ID) || document.getElementById(WIDGET_SCRIPT_ID)) {
      return;
    }

    const script = document.createElement("script");
    script.id = WIDGET_SCRIPT_ID;
    script.src = "https://app.anywheretally.com/widget/loader.js";
    script.async = true;
    script.setAttribute("data-widget-key", WIDGET_KEY);

    document.body.appendChild(script);
  }, []);

  return null;
}
