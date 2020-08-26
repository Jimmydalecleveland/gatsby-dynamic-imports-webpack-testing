import React from "react"
import CHANNEL_LINEUP_DATA from "./leshen/ChannelLineup/dummyData"
import { PACKAGE_DATA } from "./leshen/PackageProvider/dummyData"
import {
  defaultTemplatePrimary,
  topBarItems,
  footerNavItems,
} from "./leshen/navigation.yml"
import { CRUMB_DATA } from "./leshen/Breadcrumbs/dummyData"
import { FLUID_IMAGE_DATA } from "./leshen/Hero/dummyData"

import Button from "./leshen/Button"
import Typography from "./leshen/Typography"
import Accordion from "./leshen/Accordion/AccordionDemo"
import ChannelLineup from "./leshen/ChannelLineup"
import Billboard from "./leshen/Billboard"
import Breadcrumbs from "./leshen/Breadcrumbs"
import CTABar from "./leshen/CTABar"
import Header from "./leshen/Header"
import Footer from "./leshen/Footer"
import Hero from "./leshen/Hero"
import List from "./leshen/List"
import LinkButton from "./leshen/LinkButton"
import PackageCard from "./leshen/PackageCard"
import Pullquote from "./leshen/Pullquote"
import SplitContent from "./leshen/SplitContent"
import VariableContent from "./leshen/VariableContent"

const NotCreated = () => (
  <div>
    <Header
      logo={<div>I am a logo</div>}
      navData={defaultTemplatePrimary}
      topBarNavData={topBarItems}
    />

    <main>
      <Hero image={FLUID_IMAGE_DATA} breadcrumbProps={CRUMB_DATA}>
        <Breadcrumbs />
        <Typography variant="h1">
          Bundle DIRECTV Packages and CenturyLink
        </Typography>
        <Typography variant="h4" rendersAs="h2">
          DIRECTV SELECT All-included + CenturyLink Internet up to 20 Mbps
          starting at
        </Typography>
        <Button variant="hero">Call Now 1.888.888.8888</Button>
      </Hero>
      <h1>I am not created by a loop</h1>
      <CTABar />
      <PackageCard
        label="Best Value"
        packageData={PACKAGE_DATA}
        cta={
          <LinkButton to="/test" variant="feature">
            Learn More
          </LinkButton>
        }
      />
      <Billboard />
      <List />
      <LinkButton>Link button</LinkButton>
      <Pullquote />
      <SplitContent />
      <VariableContent />

      <ChannelLineup data={CHANNEL_LINEUP_DATA} />
    </main>
    <Footer navData={footerNavItems} />
  </div>
)

export default NotCreated
