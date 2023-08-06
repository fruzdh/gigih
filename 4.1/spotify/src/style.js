import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        "normal-button": {
          textColor: "#b3b3b3",
          justifyContent: "start",
          _hover: {
            textColor: "#eaeaea",
          },
        },
        "green-button": {
          backgroundColor: "#1ed760",
          textColor: "black",
          _hover: {
            backgroundColor: "#23eb69",
            _loading: {
              backgroundColor: "#1ed760",
              opacity: 0.4,
            },
            _disabled: {
              backgroundColor: "#1ed760",
              opacity: 0.4,
            },
          },
        },
        "normal-icon-button": {
          textColor: "#b3b3b3",
          borderRadius: "50%",
          _hover: {
            bgColor: "#212121",
            textColor: "#eaeaea",
          },
        },
      },
      defaultProps: {
        variant: "normal-button",
      },
    },
  },
});

export default theme;
