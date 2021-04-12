<img src="https://github.com/react-pdf/site/blob/master/src/static/images/logo.png" alt="react-pdf logo" width="120px" />

# styled-components

[styled-components](https://github.com/styled-components/styled-components) bindings for react-pdf

## Deprecated
This package will no longer be mantained, and I strongly recommend just using the StyleSheet primitive to style PDF documents. The reasons are:

- It's been reported many times that some CSS properties are not transformed correctly by styled-components
- This relies on a very old styled-components version, and I couldn't adjust the solution to new ones since it changed a lot internally
- This won't reuse your pre-existing styled-components instance. It will ship the library twice generating a bigger bundle


## Installation

```
yarn add @react-pdf/styled-components
```

## Usage
`@react-pdf/styled-components` follows the same styled-components API

```jsx
import styled from '@react-pdf/styled-components';

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
