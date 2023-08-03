import React from 'react'
import { Timeline, TimelineEvent } from "react-event-timeline";
import check from "../../Asset/images/check.svg"


function TimeLine() {
    return (
        <div className='timeline-main'>
            <Timeline className="timeline">
                <TimelineEvent className='timeline-check'
                    title="Thu, 06 Jul 07:42 PM"
                    createdAt="Orderd"
                    icon={<img src={check}></img>}
                >
                </TimelineEvent>
                <TimelineEvent className='timeline-check'
                    title="Fri, 07 Jul 02:15 PM"
                    onClick={() => alert("clicked")}
                    createdAt="Under process"
                    icon={<img className='timeline-img' src={check}></img>}
                > 
                </TimelineEvent>
                <TimelineEvent className='timeline-check'
                    title="Fri, 07 Jul 03:30 PM"
                    onClick={() => alert("clicked")}
                    createdAt="Shipped"
                    icon={<img src={check}></img>}
                > 
                </TimelineEvent>
                <TimelineEvent className='timeline-check'
                    title="Fri, 07 Jul 05:54 PM"
                    onClick={() => alert("clicked")}
                    createdAt="Delivered"
                    icon={<img src={check}></img>}
                > 
                </TimelineEvent>
            </Timeline>
        </div>
    )
}

export default TimeLine

