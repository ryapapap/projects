import Typography from 'typography'
import theme from 'typography-theme-lincoln'
// import theme from 'typography-theme-ocean-beach'
// import theme from 'typography-theme-twin-peaks'
// import theme from 'typography-theme-judah'
// import theme from 'typography-theme-sutro'

theme.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
})

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
