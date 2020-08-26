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

import Alpha from "./components/Alpha.js"
import Bravo from "./components/Bravo"
import Charlie from "./components/Charlie"
import Delta from "./components/Delta.js"
import Echo from "./components/Echo"
import Foxtrot from "./components/Foxtrot"

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

export const determineComponent = ({ id, name, children }) => {
  let Component

  switch (name) {
    case "Alpha":
      Component = Alpha
      break
    case "Bravo":
      Component = Bravo
      break
    case "Charlie":
      Component = Charlie
      break
    case "Delta":
      Component = Delta
      break
    case "Echo":
      Component = Echo
      break
    case "Foxtrot":
      Component = Foxtrot
      break
    case "Button":
      Component = Button
      break
    case "Typography":
      Component = Typography
      break
    case "Accordion":
      Component = Accordion
      break
    case "Billboard":
      Component = Billboard
      break
    case "Breadcrumbs":
      Component = Breadcrumbs
      break
    case "CTABar":
      Component = CTABar
      break
    case "Header":
      return (
        <Header
          logo={<div>I am a logo</div>}
          navData={defaultTemplatePrimary}
          topBarNavData={topBarItems}
        />
      )
    case "Footer":
      return <Footer navData={footerNavItems} />
    case "Hero":
      return (
        <Hero image={FLUID_IMAGE_DATA} breadcrumbProps={CRUMB_DATA}>
          <Typography variant="h1">
            Bundle DIRECTV Packages and CenturyLink
          </Typography>
          <Typography variant="h4" rendersAs="h2">
            DIRECTV SELECT All-included + CenturyLink Internet up to 20 Mbps
            starting at
          </Typography>
          <Button variant="hero">Call Now 1.888.888.8888</Button>
        </Hero>
      )
    case "List":
      Component = List
      break
    case "LinkButton":
      Component = LinkButton
      break
    case "PackageCard":
      return (
        <PackageCard
          label="Best Value"
          packageData={PACKAGE_DATA}
          cta={
            <LinkButton to="/test" variant="feature">
              Learn More
            </LinkButton>
          }
        />
      )
    case "Pullquote":
      Component = Pullquote
      break
    case "SplitContent":
      Component = SplitContent
      break
    case "VariableContent":
      Component = VariableContent
      break
    case "Channel Lineup":
      return <ChannelLineup data={CHANNEL_LINEUP_DATA} />
    default:
      return <h2>Not found</h2>
  }

  return <Component key={id}>{children}</Component>
}
