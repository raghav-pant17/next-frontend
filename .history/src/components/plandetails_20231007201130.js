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
        let i =0;
        while(plan[i]?.planname != currentPlan){
            i++;
        }

        const dispPlans = [];
        for(var val=0 ; val<3 ; val++) {
            if(val!=i) {
                dispPlans[val] = plan[val];
            }
        }

        return dispPlans;
    }
}

export default new plandetails()