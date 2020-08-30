import Typography from 'typography'

const typography = Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.75,
  scaleRatio: 5 / 2,
  googleFonts: [],
  headerFontFamily: ['-apple-system', 'system-ui', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['-apple-system', 'system-ui', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
  bodyColor: "hsla(0,0%,0%,0.9)",
  headerWeight: 900,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo }, options) =>
   ({
    blockquote: {
      fontSize: '1.20112rem',
      lineHeight: '1.75rem',
      color: 'hsla(0,0%,0%,0.59)',
      fontStyle: "italic",
      paddingLeft: '1.42188rem',
      marginLeft: '-1.75rem',
      borderLeft: '0.32813rem solid hsla(0,0%,0%,0.9)',
    },
    "blockquote > :last-child": {
      marginBottom: 0,
    },
    "blockquote cite": {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    "blockquote cite:before": {
      content: '"— "',
    },
    ul: {
      listStyle: "disc",
    },
    "ul,ol": {
      marginLeft: 0,
    },
    ['@media (prefers-color-scheme: dark)']: {
      body: {
        backgroundColor: '#323232',
        color: 'rgba(255,255,255,0.85)'
      },
      blockquote: {
        color: 'rgba(255,255,255,1)',
        borderLeft: '0.32813rem solid rgba(255,255,255,1)',
      }
    },
    ['@media only screen and (max-width:480px)']: {
      "ul,ol": {
        marginLeft: '1.75rem',
      },
      blockquote: {
        marginLeft: '-1.3125rem',
        marginRight: 0,
        paddingLeft: '0.98438rem',
      },
    },
    "h1,h2,h3,h4,h5,h6": {
      marginTop: '3.5rem',
    },
    h4: {
      letterSpacing: "0.140625em",
      textTransform: "uppercase",
    },
    h6: {
      fontStyle: "italic",
    },
    a: {
      color: "#007acc",
      textDecoration: "none",
    },
    "a:hover,a:active": {
      textDecoration: "underline",
    },
    "mark,ins": {
      background: "#007acc",
      color: "white",
      padding: '0.10938rem 0.21875rem',
      textDecoration: "none",
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
