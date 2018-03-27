import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Calendar  from "../calendar/Calendar";


storiesOf("Calendar", module)
.add("calendar", () => <Calendar />);
