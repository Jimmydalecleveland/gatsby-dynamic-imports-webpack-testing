module.exports = [
  {
    slug: "/alpha",
    heading: "alpha only",
    components: [{ id: 1, name: "Alpha" }],
  },
  {
    slug: "/bravo",
    heading: "bravo",
    components: [{ id: 2, name: "Bravo" }],
  },
  {
    slug: "/charlie",
    heading: "charlie",
    components: [{ id: 3, name: "Charlie" }],
  },
  {
    slug: "/alpha-bravo-charlie",
    heading: "alpha bravo and his boy charlie",
    components: [
      { id: 4, name: "Alpha" },
      { id: 5, name: "Bravo" },
      { id: 6, name: "Charlie" },
    ],
  },
  {
    slug: "/alpha-delta-echo-foxtrot",
    heading: "alpha delta echo foxtrot",
    components: [
      { id: 7, name: "Alpha" },
      { id: 8, name: "Delta" },
      { id: 9, name: "Echo" },
      { id: 10, name: "Foxtrot" },
    ],
  },
  {
    slug: "/leshen",
    heading: "leshen",
    components: [
      { id: 11, name: "Typography", children: "I am Typography!" },
      { id: 12, name: "Button", children: "I am button!" },
      { id: 13, name: "Accordion" },
      { id: 14, name: "Channel Lineup" },
    ],
  },
  {
    slug: "/leshen-just-typography",
    heading: "leshen, just typography",
    components: [
      { id: 15, name: "Typography", children: "I am Typography!" },
      { id: 16, name: "Typography", children: "I also, am Typography" },
      {
        id: 17,
        name: "Typography",
        children: "I am, also known as Typography",
      },
      { id: 18, name: "Typography", children: "I am Typography as well" },
      { id: 19, name: "Typography", children: "Ditto" },
    ],
  },
]
