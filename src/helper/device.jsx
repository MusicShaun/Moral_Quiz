const size = {
  mobile: '500px',
  tablet: '401px',
  desktop: '1300px'
}

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
}