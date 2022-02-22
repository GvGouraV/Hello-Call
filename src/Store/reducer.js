
//import { SEND_REQUEST_HISTORY, SAVE_REQUEST, SENT_HISTORY_ACTIVE, DELETE_SAVE_REQEST, DELETE_HISTORY } from "../actions/type"
import { EDIT_CUSTOMER,CLICK,CHANGE_EDIT_CUST } from "../actions/type";
function createData1(callType, device, date, time, callStatus, custmor, srNumber, agent, agentNo, total, name) {
  return { callType, device, date, time, callStatus, custmor, srNumber, agent, agentNo, total, name };
}
function createData(date, time, smsProvider, custmor, actionTaken, sms, actionDate, actionTime, credit, smsData, name) {
  return { date, time, smsProvider, custmor, actionTaken, actionDate, actionTime, credit, sms, smsData, name };
}
function createData2(name, number, weather, date, time, lastDate, lastTime,email,compony) {
  return { name, number, weather, date, time, lastDate, lastTime,email,compony };
}

const initialState = {

    click:0,
     SMSrows : [
      createData("04 Apr 2021", "03:21:38 pm", "Sulekha", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Jacob K"),
      createData("04 Apr 2021", "03:21:38 pm", "Justdial", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Unknow"),
      createData("04 Apr 2021", "03:21:38 pm", "Sulekha", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Jacob K"),
      createData("04 Apr 2021", "03:21:38 pm", "Justdial", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Unknow"),
      createData("04 Apr 2021", "03:21:38 pm", "Sulekha", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Jacob K"),
      createData("04 Apr 2021", "03:21:38 pm", "Justdial", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Unknow"),
      createData("04 Apr 2021", "03:21:38 pm", "Sulekha", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Jacob K"),
      createData("04 Apr 2021", "03:21:38 pm", "Justdial", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Unknow"),
      createData("04 Apr 2021", "03:21:38 pm", "Sulekha", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Jacob K"),
      createData("04 Apr 2021", "03:21:38 pm", "Justdial", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Unknow"),
      createData("04 Apr 2021", "03:21:38 pm", "Sulekha", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Jacob K"),
      createData("04 Apr 2021", "03:21:38 pm", "Justdial", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Unknow"),
      createData("04 Apr 2021", "03:21:38 pm", "Sulekha", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Jacob K"),
      createData("04 Apr 2021", "03:21:38 pm", "Justdial", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Unknow"),
      createData("04 Apr 2021", "03:21:38 pm", "Sulekha", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Jacob K"),
      createData("04 Apr 2021", "03:21:38 pm", "Justdial", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Unknow"),
      createData("04 Apr 2021", "03:21:38 pm", "Sulekha", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Jacob K"),
      createData("04 Apr 2021", "03:21:38 pm", "Justdial", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Unknow"),
      createData("04 Apr 2021", "03:21:38 pm", "Sulekha", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Jacob K"),
      createData("04 Apr 2021", "03:21:38 pm", "Justdial", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Unknow"),
      createData("04 Apr 2021", "03:21:38 pm", "Sulekha", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Jacob K"),
      createData("04 Apr 2021", "03:21:38 pm", "Justdial", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Unknow"),
      createData("04 Apr 2021", "03:21:38 pm", "Sulekha", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Jacob K"),
      createData("04 Apr 2021", "03:21:38 pm", "Justdial", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Unknow"),
      createData("04 Apr 2021", "03:21:38 pm", "Sulekha", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Jacob K"),
      createData("04 Apr 2021", "03:21:38 pm", "Justdial", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Unknow"), createData("04 Apr 2021", "03:21:38 pm", "Sulekha", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Jacob K"),
      createData("04 Apr 2021", "03:21:38 pm", "Justdial", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Unknow"),
      createData("04 Apr 2021", "03:21:38 pm", "Sulekha", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Jacob K"),
      createData("04 Apr 2021", "03:21:38 pm", "Justdial", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Unknow"),
      createData("04 Apr 2021", "03:21:38 pm", "Sulekha", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Jacob K"),
      createData("04 Apr 2021", "03:21:38 pm", "Justdial", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Unknow"),
      createData("04 Apr 2021", "03:21:38 pm", "Sulekha", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Jacob K"),
      createData("04 Apr 2021", "03:21:38 pm", "Justdial", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Unknow"),
      createData("04 Apr 2021", "03:21:38 pm", "Sulekha", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Jacob K"),
      createData("04 Apr 2021", "03:21:38 pm", "Justdial", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Unknow"),
      createData("04 Apr 2021", "03:21:38 pm", "Sulekha", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Jacob K"),
      createData("04 Apr 2021", "03:21:38 pm", "Justdial", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Unknow"),
      createData("04 Apr 2021", "03:21:38 pm", "Sulekha", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Jacob K"),
      createData("04 Apr 2021", "03:21:38 pm", "Justdial", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Unknow"),
      createData("04 Apr 2021", "03:21:38 pm", "Sulekha", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Jacob K"),
      createData("04 Apr 2021", "03:21:38 pm", "Justdial", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Unknow"),
      createData("04 Apr 2021", "03:21:38 pm", "Sulekha", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Jacob K"),
      createData("04 Apr 2021", "03:21:38 pm", "Justdial", 8272627282, "No Action Taken", "Find dealers near...", "06 Apr 2021", "02:11:22 pm", "0.02", "it is long established fact that render will be distracted by the readable contrnt of the page when looking at the layout ", "Unknow"),
    ],
     CALLrows:[
      createData1("in", "device", "04 Apr 2021", "03:21:38 pm", "Missed", "8272627282", "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Jacob K",),
      createData1("out", "device", "04 Apr 2021", "03:21:38 pm", "Not Connected", 8272627282, "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Unknow"),
      createData1("out", "device", "04 Apr 2021", "03:21:38 pm", "Connected", 8272627282, "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Jacob K"),
      createData1("in", "call", "04 Apr 2021", "03:21:38 pm", "Missed", "8272627282", "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Jacob K"),
      createData1("out", "call", "04 Apr 2021", "03:21:38 pm", "Not Connected", 8272627282, "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Unknow"),
      createData1("out", "call", "04 Apr 2021", "03:21:38 pm", "Connected", 8272627282, "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Jacob K"),
      createData1("in", "device", "04 Apr 2021", "03:21:38 pm", "Missed", "+8272627282", "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Jacob K"),
      createData1("out", "device", "04 Apr 2021", "03:21:38 pm", "Not Connected", 8272627282, "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Unknow"),
      createData1("out", "device", "04 Apr 2021", "03:21:38 pm", "Connected", 8272627282, "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Jacob K"),
      createData1("in", "call", "04 Apr 2021", "03:21:38 pm", "Missed", "8272627282", "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Jacob K"),
      createData1("out", "call", "04 Apr 2021", "03:21:38 pm", "Not Connected", 8272627282, "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Unknow"),
      createData1("out", "device", "04 Apr 2021", "03:21:38 pm", "Connected", 8272627282, "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Jacob K"),
      createData1("in", "device", "04 Apr 2021", "03:21:38 pm", "Missed", "8272627282", "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Jacob K"),
      createData1("out", "call", "04 Apr 2021", "03:21:38 pm", "Not Connected", 8272627282, "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Unknow"),
      createData1("out", "call", "04 Apr 2021", "03:21:38 pm", "Connected", 8272627282, "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Jacob K"),
      createData1("in", "device", "04 Apr 2021", "03:21:38 pm", "Missed", "8272627282", "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Jacob K"),
      createData1("out", "device", "04 Apr 2021", "03:21:38 pm", "Not Connected", 8272627282, "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Unknow"),
      createData1("out", "device", "04 Apr 2021", "03:21:38 pm", "Connected", 8272627282, "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Jacob K"),
      createData1("in", "device", "04 Apr 2021", "03:21:38 pm", "Missed", "8272627282", "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Jacob K"),
      createData1("out", "call", "04 Apr 2021", "03:21:38 pm", "Not Connected", 8272627282, "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Unknow"),
      createData1("out", "call", "04 Apr 2021", "03:21:38 pm", "Connected", 8272627282, "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Jacob K"),
      createData1("in", "call", "04 Apr 2021", "03:21:38 pm", "Missed", "8272627282", "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Jacob K"),
      createData1("out", "device", "04 Apr 2021", "03:21:38 pm", "Not Connected", 8272627282, "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Unknow"),
      createData1("out", "device", "04 Apr 2021", "03:21:38 pm", "Connected", 8272627282, "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Jacob K"),
      createData1("in", "device", "04 Apr 2021", "03:21:38 pm", "Missed", "8272627282", "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Jacob K"),
      createData1("out", "call", "04 Apr 2021", "03:21:38 pm", "Not Connected", 8272627282, "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Unknow"),
      createData1("out", "device", "04 Apr 2021", "03:21:38 pm", "Connected", 8272627282, "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Jacob K"),
  
    ],
     AllCust:[
      createData2('Alex Mervis', 9892828282, "Hot", "04 Apr 2021", "at 03:21:38 pm", "06 Apr 2021", "at 02:21:00 pm","alex.mervis@gmail.com","MS SOFT Communications PVT LTD"),
      createData2('Gourav Sharma', 9780566302, "Cold", "05 Apr 2021", "at 06:22:39 pm", "03 Apr 2021", "at 03:40:06 pm","gourav.52Sharma@gmail.com","MilestoneOS PVT LTD"),
      createData2('Mohit Kumar', 9863241596, "Warm", "06 Apr 2021", "at 05:29:39 pm", "07 Apr 2021", "at 01:45:06 pm","mohitsharma@gmail.com","MD BIOSOFT PVT LTD"),
      createData2('Maxwell', 8269632145, "Closed", "08 Apr 2021", "at 08:19:39 pm", "07 Apr 2021", "at 05:40:06 pm","maxwell.rio@gmail.com","AUS Communaction PVT LTD"),
      createData2('Finch', 8536912358, "Hot", "06 Apr 2021", "at 06:22:390 pm", "01 Apr 2021", "at 06:40:06 pm","finchaus52@gmail.com","WIPRO PVT LTD"),
      createData2('Alex Mervis', 9892828282, "Hot", "04 Apr 2021", "at 03:21:38 pm", "06 Apr 2021", "at 02:21:00 pm","alex.mervis@gmail.com","MS SOFT Communications PVT LTD"),
      createData2('Gourav Sharma', 9780566302, "Cold", "05 Apr 2021", "at 06:22:39 pm", "03 Apr 2021", "at 03:40:06 pm","gourav.52Sharma@gmail.com","MilestoneOS PVT LTD"),
      createData2('Mohit Kumar', 9863241596, "Warm", "06 Apr 2021", "at 05:29:39 pm", "07 Apr 2021", "at 01:45:06 pm","mohitsharma@gmail.com","MD BIOSOFT PVT LTD"),
      createData2('Maxwell', 8269632145, "Closed", "08 Apr 2021", "at 08:19:39 pm", "07 Apr 2021", "at 05:40:06 pm","maxwell.rio@gmail.com","AUS Communaction PVT LTD"),
      createData2('Finch', 8536912358, "Hot", "06 Apr 2021", "at 06:22:390 pm", "01 Apr 2021", "at 06:40:06 pm","finchaus52@gmail.com","WIPRO PVT LTD"),
      createData2('Gourav Sharma', 9780566302, "Cold", "05 Apr 2021", "at 06:22:39 pm", "03 Apr 2021", "at 03:40:06 pm","gourav.52Sharma@gmail.com","MilestoneOS PVT LTD"),
      createData2('Mohit Kumar', 9863241596, "Warm", "06 Apr 2021", "at 05:29:39 pm", "07 Apr 2021", "at 01:45:06 pm","mohitsharma@gmail.com","MD BIOSOFT PVT LTD"),
      createData2('Maxwell', 8269632145, "Closed", "08 Apr 2021", "at 08:19:39 pm", "07 Apr 2021", "at 05:40:06 pm","maxwell.rio@gmail.com","AUS Communaction PVT LTD"),
      createData2('Maxwell', 8269632145, "Closed", "08 Apr 2021", "at 08:19:39 pm", "07 Apr 2021", "at 05:40:06 pm","maxwell.rio@gmail.com","AUS Communaction PVT LTD"),
      createData2('Finch', 8536912358, "Hot", "06 Apr 2021", "at 06:22:390 pm", "01 Apr 2021", "at 06:40:06 pm","finchaus52@gmail.com","WIPRO PVT LTD"),
      createData2('Alex Mervis', 9892828282, "Hot", "04 Apr 2021", "at 03:21:38 pm", "06 Apr 2021", "at 02:21:00 pm","alex.mervis@gmail.com","MS SOFT Communications PVT LTD"),
      createData2('Gourav Sharma', 9780566302, "Cold", "05 Apr 2021", "at 06:22:39 pm", "03 Apr 2021", "at 03:40:06 pm","gourav.52Sharma@gmail.com","MilestoneOS PVT LTD"),
      createData2('Mohit Kumar', 9863241596, "Warm", "06 Apr 2021", "at 05:29:39 pm", "07 Apr 2021", "at 01:45:06 pm","mohitsharma@gmail.com","MD BIOSOFT PVT LTD"),
      createData2('Maxwell', 8269632145, "Closed", "08 Apr 2021", "at 08:19:39 pm", "07 Apr 2021", "at 05:40:06 pm","maxwell.rio@gmail.com","AUS Communaction PVT LTD"),
      createData2('Finch', 8536912358, "Hot", "06 Apr 2021", "at 06:22:390 pm", "01 Apr 2021", "at 06:40:06 pm","finchaus52@gmail.com","WIPRO PVT LTD"),
      createData2('Gourav Sharma', 9780566302, "Cold", "05 Apr 2021", "at 06:22:39 pm", "03 Apr 2021", "at 03:40:06 pm","gourav.52Sharma@gmail.com","MilestoneOS PVT LTD"),
      createData2('Mohit Kumar', 9863241596, "Warm", "06 Apr 2021", "at 05:29:39 pm", "07 Apr 2021", "at 01:45:06 pm","mohitsharma@gmail.com","MD BIOSOFT PVT LTD"),
      createData2('Maxwell', 8269632145, "Closed", "08 Apr 2021", "at 08:19:39 pm", "07 Apr 2021", "at 05:40:06 pm","maxwell.rio@gmail.com","AUS Communaction PVT LTD"),
      createData2('Finch', 8536912358, "Hot", "06 Apr 2021", "at 06:22:390 pm", "01 Apr 2021", "at 06:40:06 pm","finchaus52@gmail.com","WIPRO PVT LTD"),
      createData2('Gourav Sharma', 9780566302, "Cold", "05 Apr 2021", "at 06:22:39 pm", "03 Apr 2021", "at 03:40:06 pm","gourav.52Sharma@gmail.com","MilestoneOS PVT LTD"),
      createData2('Mohit Kumar', 9863241596, "Warm", "06 Apr 2021", "at 05:29:39 pm", "07 Apr 2021", "at 01:45:06 pm","mohitsharma@gmail.com","MD BIOSOFT PVT LTD"),
      createData2('Maxwell', 8269632145, "Closed", "08 Apr 2021", "at 08:19:39 pm", "07 Apr 2021", "at 05:40:06 pm","maxwell.rio@gmail.com","AUS Communaction PVT LTD"),
      createData2('Maxwell', 8269632145, "Closed", "08 Apr 2021", "at 08:19:39 pm", "07 Apr 2021", "at 05:40:06 pm","maxwell.rio@gmail.com","AUS Communaction PVT LTD"),
      createData2('Finch', 8536912358, "Hot", "06 Apr 2021", "at 06:22:390 pm", "01 Apr 2021", "at 06:40:06 pm","finchaus52@gmail.com","WIPRO PVT LTD"),
      createData2('Alex Mervis', 9892828282, "Hot", "04 Apr 2021", "at 03:21:38 pm", "06 Apr 2021", "at 02:21:00 pm","alex.mervis@gmail.com","MS SOFT Communications PVT LTD"),
    ],
  customer:{},
  index:-1,
}
const reducer = (state = initialState, action) => {
     let click= state.click
     let customer = state.customer
     let SMSrows = state.SMSrows
     let AllCust = state.AllCust
     let index = state.index
     let CALLrows = state.CALLrows
    if(action.type==CLICK){
      let click1 = action.payload.click
      return {click:click1,CALLrows:CALLrows,SMSrows:SMSrows,AllCust:AllCust,customer:customer,index:index}
    }
    if(action.type==EDIT_CUSTOMER){
         let customer1 = action.payload.customer
         let index1 = action.payload.index
         return {click:click,CALLrows:CALLrows,SMSrows:SMSrows,AllCust:AllCust,customer:customer1,index:index1}
    }
    if(action.type==CHANGE_EDIT_CUST){
      let customer1 = action.payload.customer
      let AllCust1 =  AllCust.map((content, i) => i === action.payload.index ? {...content, text: action.payload} : content )
      return {click:click,CALLrows:CALLrows,SMSrows:SMSrows,AllCust:AllCust1,customer:customer1,index:index}

    }
    return state
}
export default reducer;