import React from "react";
import { storiesOf } from "@storybook/react";

import Calendar  from "../calendar/Calendar";


storiesOf("Calendar", module)
	.add("calendar", () => <Calendar />);
