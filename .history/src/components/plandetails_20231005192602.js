import React from "react";

var plan = [
    {
        planname: "silver",
        planprice: "199",
        plandetails: "Amazon Prime(Premium)+ Disney+ (Free Content) + Zee (Free Content)+ Netflix (Free Content)"
    },
    {
        planname: "gold",
        planprice: "399",
        plandetails: "Amazon Prime(Premium)+ Disney+ (Premium) + Zee (Premium)+ Netflix (Free Content)"
    },
    {
        planname: "platinum",
        planprice: "799",
        plandetails: "Amazon Prime(Premium)+ Disney+ (Premium) + Zee (Premium)+ Netflix (Premium)"
    }
]


class plandetails{
    getUpgrade(currentPlan){
        // const i = plan.findIndex((plan) => { plan.planname = currentPlan });
        let i =0;
        while(plan[i]?.planname != currentPlan){
            i++;
        }

        if(plan[i])
        var newplan = plan.splice(i,1);
        console.log(plan)
        return plan;
    }
}

export default new plandetails()