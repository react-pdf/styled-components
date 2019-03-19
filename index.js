import ReactPDF from '@react-pdf/renderer'

import _InlineStyle from 'styled-components/src/models/InlineStyle'
import _StyledNativeComponent from 'styled-components/src/models/StyledNativeComponent'
import _constructWithOptions from 'styled-components/src/constructors/constructWithOptions'
import css from 'styled-components/src/constructors/css'
import ThemeProvider from 'styled-components/src/models/ThemeProvider'
import withTheme from 'styled-components/src/hoc/withTheme'
import isStyledComponent from 'styled-components/src/utils/isStyledComponent'

const constructWithOptions = _constructWithOptions(css)
const InlineStyle = _InlineStyle(ReactPDF.StyleSheet)
const StyledNativeComponent = _StyledNativeComponent(constructWithOptions, InlineStyle)
const styled = (tag: Target) => constructWithOptions(StyledNativeComponent, tag)

const aliases = `Image Text View Link Page Document`

// Define a getter for each alias which simply gets the ReactPDF component and passes it to styled
aliases.split(/\s+/m).forEach(alias =>
  Object.defineProperty(styled, alias, {
    enumerable: true,
    configurable: false,
    get() {
      return styled(ReactPDF[alias])
    },
  })
)

export { css, isStyledComponent, ThemeProvider, withTheme }
export default styled
