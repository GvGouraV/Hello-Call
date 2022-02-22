import {CLICK,EDIT_CUSTOMER,CHANGE_EDIT_CUST} from "./type"
export const pushClick = (val) => ({
    type: CLICK,
    payload: {click: val }
})
export const EditCust = (val,ind) =>({
    type:EDIT_CUSTOMER,
    payload:{customer:val,index:ind}
})
export const ChangeEdit = (val,ind) =>({
    type:CHANGE_EDIT_CUST,
    payload:{customer:val,index:ind}
})
