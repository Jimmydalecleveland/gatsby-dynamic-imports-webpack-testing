import React from "react"
import Accordion from "."
import Typography from "../Typography"

const AccordionDemo = () => (
  <Accordion
    items={[
      {
        title: "How do I contact Customer Support?",
        content: (
          <Typography>
            To reach Customer Service for Home Services, call 1-800-288-2020.
            For Wireless Customer Service call 1-800-331-0500, or dial 611 from
            an wireless phone. For chat options, see the AT&amp;T{" "}
            <a href="/#">Contact Us page</a>.
          </Typography>
        ),
      },
      {
        title: "How do I find out if service is available in my area?",
        content: (
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis aperiam eum facere unde totam nulla. Quae, dolorem et
            cum ipsum voluptatibus eos ipsam, libero similique nemo voluptates
            enim rerum sunt!
          </Typography>
        ),
      },
      {
        title: "What is my account number?",
        content: (
          <Typography>
            You may need your account number if you call customer service or
            tech support. It’s located on the top right corner of the first page
            of your paper bill, or you can find it <a href="/#">online</a>.?
          </Typography>
        ),
      },
    ]}
  />
)

export default AccordionDemo
