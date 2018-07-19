<img src="https://github.com/react-pdf/site/blob/master/src/static/images/logo.png" alt="react-pdf logo" width="120px" />

# styled-components

[styled-components](https://github.com/styled-components/styled-components) bindings for react-pdf


## Installation

```
yarn add @react-pdf/styled-components
```

## Usage
`@react-pdf/styled-components` follows the same styled-components API

```jsx
import styled from ''@react-pdf/styled-components';

const Heading = styled.Text`
  margin: 10px;
  font-size: 22px;
  font-family: 'Helvetica';
`;

const MyDocument = () => (
  <Document>
    <Page>
      <Heading>
        D'oh!
      </Heading>
    </Page>
  </Document>
)
```

## Supported components

- Document
- Page
- View
- Image
- Text
- Link
