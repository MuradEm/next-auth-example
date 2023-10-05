export const DEBUG = process.env.NODE_ENV === "development"

export let TIMESHEETAPIURL = ""
if (DEBUG) {
  // TIMESHEETAPIURL = "http://dev.info-rmi.com/timesheetapi/ISAPI.dll"
  TIMESHEETAPIURL = "https://tools.info-rmi.com/timesheetapi/ISAPI.dll"
} else {
  TIMESHEETAPIURL = "https://tools.info-rmi.com/timesheetapi/ISAPI.dll"
}