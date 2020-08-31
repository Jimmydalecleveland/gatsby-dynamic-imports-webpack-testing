import React from "react"
import loadable from "@loadable/component"

import CHANNEL_LINEUP_DATA from "./leshen/ChannelLineup/dummyData"
import { PACKAGE_DATA } from "./leshen/PackageProvider/dummyData"
import {
  defaultTemplatePrimary,
  topBarItems,
  footerNavItems,
} from "./leshen/navigation.yml"
import { CRUMB_DATA } from "./leshen/Breadcrumbs/dummyData"
import { FLUID_IMAGE_DATA } from "./leshen/Hero/dummyData"

const Button = loadable(() => import("./leshen/Button"))
const Typography = loadable(() => import("./leshen/Typography"))
const Accordion = loadable(() => import("./leshen/Accordion/AccordionDemo"))
const ChannelLineup = loadable(() => import("./leshen/ChannelLineup"))
const Billboard = loadable(() => import("./leshen/Billboard"))
const Breadcrumbs = loadable(() => import("./leshen/Breadcrumbs"))
const CTABar = loadable(() => import("./leshen/CTABar"))
const Header = loadable(() => import("./leshen/Header"))
const Footer = loadable(() => import("./leshen/Footer"))
const Hero = loadable(() => import("./leshen/Hero"))
const List = loadable(() => import("./leshen/List"))
const LinkButton = loadable(() => import("./leshen/LinkButton"))
const PackageCard = loadable(() => import("./leshen/PackageCard"))
const Pullquote = loadable(() => import("./leshen/Pullquote"))
const SplitContent = loadable(() => import("./leshen/SplitContent"))
const VariableContent = loadable(() => import("./leshen/VariableContent"))

export const determineComponent = ({ id, name, children }) => {
  let Component

  switch (name) {
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
